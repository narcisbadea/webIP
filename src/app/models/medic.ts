import {IBase} from "./base";
import {IUser} from "./user";

export interface IMedic extends IBase {
  user : IUser;
  tipMedic : string;
}
