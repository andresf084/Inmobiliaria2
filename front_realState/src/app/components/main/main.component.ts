import { Component, OnInit } from '@angular/core';
import {PropertiesService} from 'src/app/services/properties.service'
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';

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
          console.log(this.propertyMaster)
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
        width: "900px",
        height: "750px",
        disableClose: true
      }
      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
