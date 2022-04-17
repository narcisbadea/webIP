import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.scss']
})
export class MedicComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tipMedic: ''
    })
  }
  submit(): void {
    this.http.post(`http://api.vhealth.me/Auth/register/medic/${this.cookieService.get('username')}`,this.form.getRawValue())
      .subscribe(res => console.log(res) );
    this.router.navigate(['/login']);
  }
}
