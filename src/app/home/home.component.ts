import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {CursorError} from "@angular/compiler/src/ml_parser/lexer";
import {Emitters} from "../emmiters/emitters";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  message = 'You are not loggen in'
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.get('jwt')}`);
    this.http.get('http://api.vhealth.me/Auth', { headers: headers }).subscribe(
      (res: any) =>{
        this.message=`Hi ${res.userName}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message=`You are not loggen in`;
        Emitters.authEmitter.emit(false);
      }
    )
  }

}

