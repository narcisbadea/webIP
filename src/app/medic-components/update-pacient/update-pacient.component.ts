import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {IPacient} from "../../models/pacient";
import {Observable} from "rxjs";
import {IMedicPacienti} from "../../models/MedicPacienti";

@Component({
  selector: 'app-update-pacient',
  templateUrl: './update-pacient.component.html',
  styleUrls: ['./update-pacient.component.scss']
})
export class UpdatePacientComponent implements OnInit {
  form: FormGroup;
  pacient: IPacient;
  private readonly token = new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.get('jwt')}`)
  private readonly id_pacient = this.cookieService.get('id_pacient');
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,

  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
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
    });
    console.log(this.id_pacient);
    this.getPacient(this.id_pacient).subscribe(pacient => {
      this.pacient = pacient;
    });
    setTimeout(() => {
      this.form.controls['username'].setValue(this.pacient.user.username);
      this.form.controls['nume'].setValue(this.pacient.nume);
      this.form.controls['prenume'].setValue(this.pacient.prenume);
      this.form.controls['varsta'].setValue(this.pacient.varsta);
      this.form.controls['cnp'].setValue(this.pacient.cnp);
      this.form.controls['judet'].setValue(this.pacient.judet.jud);
      this.form.controls['localitate'].setValue(this.pacient.localitate);
      this.form.controls['strada'].setValue(this.pacient.strada);
      this.form.controls['numar'].setValue(this.pacient.numar);
      this.form.controls['telefon'].setValue(this.pacient.telefon);
      this.form.controls['email'].setValue(this.pacient.email);
      this.form.controls['profesie'].setValue(this.pacient.profesie);
      this.form.controls['locDeMunca'].setValue(this.pacient.locDeMunca);

    }, 1000);
  }


  submit(): void {

    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.get('jwt')}`);
    // console.log(this.form.getRawValue());
    // this.http.post('http://api.vhealth.me/Auth/register/pacient', this.form.getRawValue(), { headers: headers }).subscribe(
    //   (res: any) =>{
    //     console.log(res);
    //     this.router.navigate(['/']);
    //   }
    // )
  }
  getPacient(id: string): Observable<IPacient> {
    return this.http.get<IPacient>("http://api.vhealth.me/pacient/"+id, {headers:this.token} );
  }


}
