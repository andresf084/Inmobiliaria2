import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ConfigService } from 'src/app/services/config.services';

@Component({
  selector: 'app-advisers',
  templateUrl: './advisers.component.html',
  styleUrls: ['./advisers.component.css']
})
export class AdvisersComponent implements OnInit {

  public form: FormGroup
  public name: AbstractControl
  public id_type: AbstractControl
  public identification: AbstractControl
  public email: AbstractControl
  public phone1: AbstractControl
  public phone2: AbstractControl
  public workCity: AbstractControl
  public workZone: AbstractControl
  public user: AbstractControl
  public password: AbstractControl
  public status: AbstractControl
  public adviserMaster: any[] = []

  constructor(
    public usersService: UsersService,
    public formBuilder: FormBuilder,
    public config: ConfigService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      id_type: ['', Validators.required],
      identification: ['', Validators.required],
      email: ['', Validators.required],
      phone1: ['', Validators.required],
      phone2: ['', Validators.required],
      workCity: ['', Validators.required],
      workZone: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required],
      status: ['', Validators.required]
    })
    this.name = this.form.controls['name']
    this.id_type = this.form.controls['id_type']
    this.identification = this.form.controls['identification']
    this.email = this.form.controls['email']
    this.phone1 = this.form.controls['phone1']
    this.phone2 = this.form.controls['phone2']
    this.workCity = this.form.controls['workCity']
    this.workZone = this.form.controls['workZone']
    this.user = this.form.controls['user']
    this.password = this.form.controls['password']
    this.status = this.form.controls['status']
  }

  ngOnInit(): void {
    this.listAdvisers();
  }

  listAdvisers() {
    this.usersService.listAdvisers().subscribe({
      next: (res: any) => {
        //console.log(res)
        if (res.length > 0) {
            this.adviserMaster = res;
          }
          console.log(this.adviserMaster);
      },
      complete: () => {console.log('Asesores listados')},
      error: () => {console.log('Error al listar asesores')}
    })
  }


}
