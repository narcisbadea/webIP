import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MedicComponent} from "./medic/medic.component";
import {MedicDashboardComponent} from "./medic-dashboard/medic-dashboard.component";
import {AdaugarePacientComponent} from "./adaugare-pacient/adaugare-pacient.component";

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'medic', component:MedicComponent},
  {path:'medic-dashboard',component:MedicDashboardComponent},
  {path:'adaugare-pacient',component:AdaugarePacientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
