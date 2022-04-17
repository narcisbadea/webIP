import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-medic-dashboard',
  templateUrl: './medic-dashboard.component.html',
  styleUrls: ['./medic-dashboard.component.scss']
})
export class MedicDashboardComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  click(): void{
    this.router.navigate(['/adaugare-pacient']);
  }
}
