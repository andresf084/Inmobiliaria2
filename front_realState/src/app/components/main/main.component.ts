import { Component, OnInit } from '@angular/core';
import {PropertiesService} from 'src/app/services/properties.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public propertyMaster: any[] = []

  constructor(
    private propertiesService: PropertiesService
  ) { }

  ngOnInit(): void {
    this.listProperties()
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

}
