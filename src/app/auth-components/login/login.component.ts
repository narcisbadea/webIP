import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  er = "";
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    })
  }
  submit(): void{
    this.http.post<any>('http://api.vhealth.me/Auth/login',this.form.getRawValue())
      .subscribe((res: any) =>{
        this.cookieService.set('jwt', res.token);
          this.cookieService.set('role', res.role);
        this.router.navigate(['/']);
        this.er="";
      },
        (err: any) =>{
          this.er=err.error;
        });


  }
}
