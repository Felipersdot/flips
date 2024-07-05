import { BaseModel } from './base/BaseModel';

export class BuilderBranding extends BaseModel {
  builderId: string;
  builderName: string;
  subDomain?: string;
  tabTitle: string;
  mainColor: string;
  secondaryColor: string;
  logo: string;
  favIcon: string;
  fullPathLogoUrl?: string;
  fullPathFavIconUrl?: string;
}
