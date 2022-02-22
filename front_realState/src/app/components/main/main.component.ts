import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service'
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.services';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { ModalViewPropertiesComponent } from '../modal-view-properties/modal-view-properties.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  formatLabelPrice(value: number) {
    if (value >= 1000000) {
      return Math.round(value / 1000000);
    }
    return value;
  }

  public params: any[] = []
  public propertyMaster: any[] = []
  public adviserMaster: any[] = []
  public bussinessType: any[] = ["alquiler", "venta"]
  public propertiesType: any[] = ["apartamento", "casa", "comercial", "oficina"]
  public cityMaster: any[] = ["bogotá d.c.", "medellín", "pereira"]
  public cityZones: any[] = ["centro", "norte", "sur", "oriente", "occidente", "noroccidente", "nororiente", "suroccidente", "suroriente"]
  public minPrice: any
  public maxPrice: any
  public islog: any
  public form: FormGroup
  public businessType: AbstractControl
  public propertyType: AbstractControl
  public city: AbstractControl
  public zone: AbstractControl
  public price: AbstractControl
  public rooms: AbstractControl
  public bathrooms: AbstractControl
  public area: AbstractControl
  public adviser: AbstractControl

  constructor(
    public dialog: MatDialog,
    private routerService: Router,
    private propertiesService: PropertiesService,
    public formBuilder: FormBuilder,
    public config: ConfigService,
    public usersService: UsersService,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      businessType: [''],
      propertyType: [''],
      city: [''],
      zone: [''],
      price: [''],
      rooms: [''],
      bathrooms: [''],
      area: [''],
      adviser: [''],
    })
    this.businessType = this.form.controls['businessType']
    this.propertyType = this.form.controls['propertyType']
    this.city = this.form.controls['city']
    this.zone = this.form.controls['zone']
    this.price = this.form.controls['price']
    this.rooms = this.form.controls['rooms']
    this.bathrooms = this.form.controls['bathrooms']
    this.area = this.form.controls['area']
    this.adviser = this.form.controls['adviser']
  }

  ngOnInit(): void {
    this.listProperties();
    this.showCreateBtn();
    this.listAdvisers();
  }

  listProperties() {
    this.propertiesService.listProperties().subscribe({
      next: (res: any) => {
        if (res.length > 0) {
          this.propertyMaster = res
          console.log(this.propertyMaster)
        }
      },
      complete: () => {console.log('propiedades listadas')},
      error: () => {console.log('Error al listar propiedades')}
    })
  }

  searchProperties() {
    var dataForm = this.form.value
    for (let prop in dataForm) {
      if (dataForm[prop] == "") {
        delete dataForm[prop]
      }
    }
    //console.log(dataForm)
    this.propertiesService.searchProperties(dataForm).subscribe({
      next: (res: any) => {
        console.log(res);
        this.propertyMaster = res;
      },
      complete: () => {console.log('filtrado con exito')},
      error: () => {console.log('Proceso filtrado error')}
    })
  }

  showCreateBtn() {
    this.islog = this.authService.isLogged();
    return this.islog
  }

  openDialog() {
    let dialogRef = this.dialog.open(
      ModalFormComponent,{
        width: "800px",
        height: "750px",
        disableClose: true
      }
      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteProperties(_id: string) {
    for (let index = 0; index < this.propertyMaster.length; index++) {
      if (this.propertyMaster[index]._id == _id) {
        this.propertiesService.deleteProperties(_id).subscribe({
          next: (res: any) => {
            if (res.status) {
              this.propertyMaster.splice(index, 1)
              console.log('Inmueble eliminado')
            }
          },
          complete: () => { this.listProperties() }, // completeHandler
          error: () => { console.log('Error al eliminar producto') }    // errorHandler
        })
      }
    }
  }

  viewPropeties(item: any) {
    let dialogRef = this.dialog.open(
      ModalViewPropertiesComponent,
      {
        data: {
          title: item.title,
          businessType: item.businessType,
          propertyType: item.propertyType,
          city: item.city,
          zone: item.zone,
          address: item.address,
          description: item.description,
          price: item.price,
          propertyImages: item.propertyImages,
          rooms: item.rooms,
          bathrooms: item.bathrooms,
          adviser: item.adviser,
          area: item.area,
          status: item.status
        },
        width: "800px",
        height: "900px",
        disableClose: true,
        restoreFocus: true
      }
      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
