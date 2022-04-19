import {IBase} from "./base";
import {IUser} from "./user";
import {IJudet} from "./judet";

export interface IPacient extends IBase {
  user: IUser;
  nume: string;
  prenume: string;
  varsta: string;
  cnp: string;
  judet: IJudet;
  localitate: string;
  strada: string;
  numar: string;
  telefon: string;
  email: string;
  profesie: string;
  locdemunca: string;
}
