import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {ISenzor} from "../../../models/senzor";

@Component({
  selector: 'app-line-chart-temperatura-pacient',
  templateUrl: './line-chart-temperatura-pacient.component.html',
  styleUrls: ['./line-chart-temperatura-pacient.component.scss']
})
export class LineChartTemperaturaPacientComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  valoriSenzor: number[] = [];
  timp: string[] = [];

  private readonly _apiUrl = 'http://api.vhealth.me/temperatura';
  private readonly token = new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.get('jwt')}`)

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService) {

  }

  ngOnInit(): void {
    this.getTemperaturi().subscribe((valori) => {
      valori.forEach((item)=>{
        this.valoriSenzor.push(item.valoare);
        this.timp.push(item.created);
      });
      console.log(this.valoriSenzor);
      this.lineChartData = [ {data: this.valoriSenzor, label: 'Temperatura'} ];
      this.lineChartLabels = this.timp;
    });
  }

  getTemperaturi(): Observable<ISenzor[]> {
    return this.http.get<ISenzor[]>(this._apiUrl, {headers: this.token});
  }


  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    annotation: undefined,
    responsive: true
  };

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


}
