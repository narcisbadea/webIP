import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {IMedicPacienti} from "../models/MedicPacienti";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-medic-dashboard',
  templateUrl: './medic-dashboard.component.html',
  styleUrls: ['./medic-dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class MedicDashboardComponent implements OnInit {
  add: FormGroup;
  pacienti: IMedicPacienti[];
  private readonly _apiUrl = 'http://api.vhealth.me/pacienti';
  private readonly token = new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.get('jwt')}`)

  dataSource: IMedicPacienti[];
  columnsToDisplay = ['Nume', 'Prenume'];
  expandedElement: IMedicPacienti | null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.get().subscribe(pacienti => this.pacienti = pacienti);
    this.dataSource = this.pacienti;
  }

  click(): void{
    this.router.navigate(['/adaugare-pacient']);
  }

  get(): Observable<IMedicPacienti[]> {
    return this.http.get<IMedicPacienti[]>(this._apiUrl, {headers:this.token} );
  }
};

