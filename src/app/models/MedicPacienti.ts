import {IBase} from "./base";
import {IUser} from "./user";
import {IPacient} from "./pacient";

export interface IMedicPacienti extends IBase {
  pacient : IPacient
}
