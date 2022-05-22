import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {IMedicPacienti} from "../../models/MedicPacienti";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IPacient} from "../../models/pacient";

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
  edit: FormGroup;
  delete: FormGroup;
  pacienti: IMedicPacienti[];

  private readonly _apiUrlPacienti = 'http://api.vhealth.me/pacienti';

  private readonly token = new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.get('jwt')}`)

  dataSource: IMedicPacienti[];
  expandedElement: IMedicPacienti | null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {   }

  ngOnInit(): void {
    this.getPacienti().subscribe(pacienti => this.pacienti = pacienti);
    this.dataSource = this.pacienti;

  }

  click(): void{
    this.router.navigate(['/adaugare-pacient']);
  }

  clickDelete(id: String): void{
    this.deletePacient(id).subscribe();
    setTimeout(function(){
      location.reload();
    }, 500);
  }
  clickEdit(id_pacient: string): void{
    this.cookieService.set('id_pacient', id_pacient);
    this.router.navigate(['/update-pacient']);
  }
  refresh(): void {
    window.location.reload();
  }
  deletePacient(id: String): Observable<IPacient>{
    return this.http.delete<IPacient>("http://api.vhealth.me/remove-pacient/" + id, {headers:this.token});
  }
  getPacienti(): Observable<IMedicPacienti[]> {
    return this.http.get<IMedicPacienti[]>(this._apiUrlPacienti, {headers:this.token} );
  }
};

