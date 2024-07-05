import { AxiosPromise } from 'axios';
import { Role } from '../models/Role';
import { Transport } from './Transport';

let USER_API: string = '/user/api';
const AUTH_END_POINT: string = 'auth';

let USER_REGISTRATION_PATH = '___ENV-VAR-USER_REGISTRATION_PATH___';
if (
  process.env.REACT_APP_USER_REGISTRATION_PATH &&
  process.env.NODE_ENV !== 'production'
) {
  USER_REGISTRATION_PATH = process.env.REACT_APP_USER_REGISTRATION_PATH;
}

if (process.env.REACT_APP_USER_API && process.env.NODE_ENV === 'development') {
  USER_API = process.env.REACT_APP_USER_API;
}

const auth = {
  // POST /auth/login
  login: (email: string, password: string) => {
    const userCredentials = {
      username: email,
      password: password,
    };
    return Transport.post(
      `${USER_API}/${AUTH_END_POINT}/login`,
      userCredentials
    );
  },
};

const username = {
  fetchUsername: (userId): AxiosPromise<string> => {
    return Transport.get(`${USER_API}/usernames/${userId}/username`, String);
  },
};

const userRegistrationToken = {
  sendInvitation: (
    email: string,
    roleId: string,
    companyId: string,
    buidlerSubdomain: string | null
  ): AxiosPromise<string> => {
    const data = {
      email,
      roleId,
      companyId,
    };

    const subdomain = buidlerSubdomain || '';

    const splitPath = USER_REGISTRATION_PATH.split('//');

    if (splitPath.length < 2) {
      return Promise.reject('USER_REGISTRATION_PATH is invalid');
    }

    const protocol = splitPath[0];
    const domain = splitPath[1];

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Target-Url': `${protocol}//${subdomain}.${domain}`,
      },
    };
    return Transport.post(
      `${USER_API}/userregistrationtoken`,
      data,
      undefined,
      config
    );
  },
};

const roles = {
  getExternalAllowedRoles: (): AxiosPromise<Role[]> => {
    return Transport.get(`${USER_API}/roles/externalallowed`, Role);
  },
};

// eslint-disable-next-line
export default {
  auth,
  username,
  userRegistrationToken,
  roles,
};
