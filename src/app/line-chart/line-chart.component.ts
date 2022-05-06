import {Component, Input, OnInit} from '@angular/core';
import {IPulsResult} from "../models/PulsResult";
import {IPuls} from "../models/puls";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() id: string;
  pulsuri: IPuls[];
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  valoriPuls: number[] = [];
  timp: string[] = [];

  private readonly _apiUrlPuls = 'http://api.vhealth.me/puls';
  private readonly token = new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.get('jwt')}`)

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService) {

  }

  ngOnInit(): void {
    this.getPulsuri(this.id).subscribe((pulsuri) => {
      pulsuri.forEach((item)=>{
        this.valoriPuls.push(item.valoare);
        this.timp.push(item.created);
      });
      console.log(this.valoriPuls);
      this.lineChartData = [ {data: this.valoriPuls, label: 'Puls'} ];
      this.lineChartLabels = this.timp;
    });
  }

  getPulsuri(id: string): Observable<IPuls[]> {
    return this.http.get<IPuls[]>(this._apiUrlPuls + "/" + id, {headers: this.token});
  }


  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    annotation: undefined,
    responsive: true
  };

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


}
