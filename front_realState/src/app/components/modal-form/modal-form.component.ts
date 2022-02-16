import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertiesService } from 'src/app/services/properties.service';
import { ConfigService } from 'src/app/services/config.services';
import { CityDataAPIService } from 'src/app/services/cities-api.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  public form: FormGroup
  public title: AbstractControl
  public businessType: AbstractControl
  public propertyType: AbstractControl
  public city: AbstractControl
  public zone: AbstractControl
  public address: AbstractControl
  public description: AbstractControl
  public price: AbstractControl
  public propertyImages: AbstractControl
  public rooms: AbstractControl
  public bathrooms: AbstractControl
  public adviser: AbstractControl
  public status: AbstractControl
  public cityMaster: any[] = []
  public propertiesType: any[] = ["Apartamento", "Casa", "Comercial", "Oficina"]
  public cityZones: any[] = ["Centro", "Norte", "Sur", "Oriente", "Occidente", "Noroccidente", "Nororiente", "Suroccidente", "Suroriente"]
  public adviserMaster: any[] = []

  constructor(
    public propertiesService: PropertiesService,
    public formBuilder: FormBuilder,
    public cityDataAPIService: CityDataAPIService,
    public usersService: UsersService,
    public config: ConfigService
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      businessType: ['', Validators.required],
      propertyType: ['', Validators.required],
      city: ['', Validators.required],
      zone: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      propertyImages: ['', Validators.required],
      rooms: ['', Validators.required],
      bathrooms: ['', Validators.required],
      adviser: ['', Validators.required],
      status: ['', Validators.required]
    })
    this. title = this.form.controls['title']
    this. businessType = this.form.controls['businessType']
    this. propertyType = this.form.controls['propertyType']
    this. city = this.form.controls['city']
    this. zone = this.form.controls['zone']
    this. address = this.form.controls['address']
    this. description = this.form.controls['description']
    this. price = this.form.controls['price']
    this. propertyImages = this.form.controls['propertyImages']
    this. rooms = this.form.controls['rooms']
    this. bathrooms = this.form.controls['bathrooms']
    this. adviser = this.form.controls['adviser']
    this. status = this.form.controls['status']
  }

  ngOnInit(): void {
    this.listCities();
    this.listAdvisers();
  }

  listCities() {
    this.cityDataAPIService.listCitiesAPI().subscribe({
      next: (res: any) => {
        //console.log(res)
        const res2: any = Object.values(res)
        if (res2[0].length > 0) {
          this.cityMaster = res2[0]
          //console.log(this.cityMaster)
        }
      },
      complete: () => { console.log('List cities success') }, // completeHandler
      error: () => { console.log('List cities error') }    // errorHandler
    })
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
