import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Emitters} from "./emmiters/emitters";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  message = 'You are not logged in'
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.get('jwt')}`);
    this.http.get('http://api.vhealth.me/Auth', { headers: headers }).subscribe(
      (res: any) =>{
        if(this.cookieService.get('role') == 'medic') {
          console.log("medic");
          this.router.navigate(['/medic-dashboard']);
        } else if(this.cookieService.get('role') == 'pacient'){
          console.log("pacient");
          this.router.navigate(['/pacient-dashboard']);
        }
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message=`You are not logged in`;
        Emitters.authEmitter.emit(false);
      }
    )
  }

}

