import HttpStatus from 'http-status-codes';
import {
  observable,
  runInAction,
  action,
  computed,
  makeObservable,
} from 'mobx';
import jwt from 'jsonwebtoken';
import { TokenUtils } from '../utils/TokenUtils';
import { Transport } from '../api/Transport';
import userApi from '../api/userApi';
import { User } from '../models/User';

export class AuthStore {
  @observable public error: string = '';
  @observable public isLoggedIn: boolean = false;
  @observable public loggedInUser: User;

  constructor() {
    makeObservable(this);

    Transport.handleResponse(
      (response: any) => response,
      (error: any) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              this.logout();
              break;

            default:
              break;
          }
        }
        return Promise.reject(error);
      }
    );

    this.isLoggedIn = !TokenUtils.isJwtTokenExpired();
    Transport.setJwtToken(TokenUtils.getJwtTokenString()!);
    if (this.isLoggedIn) {
      const decodedToken = jwt.decode(TokenUtils.getJwtTokenString()!) as User;
      this.loggedInUser = new User(decodedToken);
      this.isLoggedIn = true;
      this.error = '';
    }
  }

  public async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await userApi.auth.login(email, password);
      const authorizationHeader = response.headers.authorization;
      const token = authorizationHeader.substring(
        'Bearer '.length,
        authorizationHeader.length
      );
      Transport.setJwtToken(token);
      const decodedToken = jwt.decode(token) as User;
      if (decodedToken !== null) {
        const user = new User(decodedToken);
        runInAction(() => {
          this.loggedInUser = user;
          this.isLoggedIn = true;
          this.error = '';
        });
      }
    } catch (error) {
      runInAction(() => (this.isLoggedIn = false));
      // @ts-ignore
      if (error.response && error.response.status === HttpStatus.UNAUTHORIZED) {
        runInAction(() => {
          this.error = 'invalidUserNamePassword';
        });
      } else {
        console.error(error);
      }
    }
    return this.isLoggedIn;
  }

  @action public logout = () => {
    TokenUtils.removeJwtToken();
    this.isLoggedIn = false;
  };

  @computed get isUserAdmin() {
    return this.isLoggedIn && this.loggedInUser?.role === 'ADMIN';
  }
}
