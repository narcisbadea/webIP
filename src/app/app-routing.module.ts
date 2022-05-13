import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth-components/login/login.component";
import {RegisterComponent} from "./auth-components/register/register.component";
import {MedicComponent} from "./medic-components/medic/medic.component";
import {MedicDashboardComponent} from "./medic-components/medic-dashboard/medic-dashboard.component";
import {AdaugarePacientComponent} from "./medic-components/adaugare-pacient/adaugare-pacient.component";
import {PacientDashboardComponent} from "./pacient-components/pacient-dashboard/pacient-dashboard.component";

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'medic', component:MedicComponent},
  {path: 'medic-dashboard',component:MedicDashboardComponent},
  {path: 'adaugare-pacient',component:AdaugarePacientComponent},
  {path: 'pacient-dashboard', component:PacientDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
