import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { ModalViewPropertiesComponent } from '../modal-view-properties/modal-view-properties.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public propertyMaster: any[] = []
  public islog: any

  constructor(
    public dialog: MatDialog,
    private routerService: Router,
    private propertiesService: PropertiesService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.listProperties();
    this.showCreateBtn();
  }

  listProperties() {
    this.propertiesService.listProperties().subscribe({
      next: (res: any) => {
        if (res.length > 0) {
          this.propertyMaster = res
          //console.log(this.propertyMaster)
        }
      },
      complete: () => {console.log('propiedades listadas')},
      error: () => {console.log('Error al listar propiedades')}
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


}
