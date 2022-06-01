import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-adaugare-pacient',
  templateUrl: './adaugare-pacient.component.html',
  styleUrls: ['./adaugare-pacient.component.scss']
})
export class AdaugarePacientComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password:'',
      nume: '',
      prenume:'',
      varsta: '',
      cnp:'',
      judet: '',
      localitate:'',
      strada: '',
      numar:'',
      telefon: '',
      email:'',
      profesie: '',
      locDeMunca:''
    })
  }

  submit(): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.get('jwt')}`);
    console.log(this.form.getRawValue());
    this.http.post('http://api.vhealth.me/Auth/register/pacient', this.form.getRawValue(), { headers: headers }).subscribe(
      (res: any) =>{
        console.log(res);
        this.router.navigate(['/']);
      }
    )
  }
}
