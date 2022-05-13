import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth-components/register/register.component';
import { LoginComponent } from './auth-components/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MedicComponent } from './medic-components/medic/medic.component';
import { MedicDashboardComponent } from './medic-components/medic-dashboard/medic-dashboard.component';
import { AdaugarePacientComponent } from './medic-components/adaugare-pacient/adaugare-pacient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './medic-components/medic-charts/line-chart/line-chart.component';
import { LineChartTempComponent } from './medic-components/medic-charts/line-chart-temp/line-chart-temp.component';
import { LineChartUmiditateComponent } from './medic-components/medic-charts/line-chart-umiditate/line-chart-umiditate.component';
import { PacientDashboardComponent } from './pacient-components/pacient-dashboard/pacient-dashboard.component';
import { LineChartPulsPacientComponent } from './pacient-components/pacient-charts/line-chart-puls-pacient/line-chart-puls-pacient.component';
import { LineChartUmiditatePacientComponent } from './pacient-components/pacient-charts/line-chart-umiditate-pacient/line-chart-umiditate-pacient.component';
import { LineChartTemperaturaPacientComponent } from './pacient-components/pacient-charts/line-chart-temperatura-pacient/line-chart-temperatura-pacient.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    MedicComponent,
    MedicDashboardComponent,
    AdaugarePacientComponent,
    LineChartComponent,
    LineChartTempComponent,
    LineChartUmiditateComponent,
    PacientDashboardComponent,
    LineChartPulsPacientComponent,
    LineChartUmiditatePacientComponent,
    LineChartTemperaturaPacientComponent
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
