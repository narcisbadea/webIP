import { Component, OnInit } from '@angular/core';
import {Emitters} from "../emmiters/emitters";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  authenticated = false;
  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) =>{
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    this.cookieService.delete('jwt');
    Emitters.authEmitter.emit(false);
  }

}
