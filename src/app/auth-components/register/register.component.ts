import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
    ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password:''
    })

  }
  submit(): void {
    this.http.post('http://api.vhealth.me/Auth/register',this.form.getRawValue())
      .subscribe(res => console.log(res));
    var radio: any;
    // @ts-ignore
      this.cookieService.set('username', this.form.getRawValue().username);
      this.router.navigate(['/medic'])
  }
}
