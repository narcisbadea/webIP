import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MedicComponent } from './medic/medic.component';
import { PacientComponent } from './home/pacient/pacient.component';
import { DefaultComponent } from './home/default/default.component';
import { MedicDashboardComponent } from './medic-dashboard/medic-dashboard.component';
import { AdaugarePacientComponent } from './adaugare-pacient/adaugare-pacient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineChartTempComponent } from './line-chart-temp/line-chart-temp.component';
import { LineChartUmiditateComponent } from './line-chart-umiditate/line-chart-umiditate.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    MedicComponent,
    PacientComponent,
    DefaultComponent,
    MedicDashboardComponent,
    AdaugarePacientComponent,
    LineChartComponent,
    LineChartTempComponent,
    LineChartUmiditateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatTableModule,
        MatDividerModule,
        ChartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
