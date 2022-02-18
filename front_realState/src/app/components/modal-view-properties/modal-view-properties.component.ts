import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-view-properties',
  templateUrl: './modal-view-properties.component.html',
  styleUrls: ['./modal-view-properties.component.css']
})
export class ModalViewPropertiesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:
            {
              title: string,
              businessType: string,
              propertyType: string,
              city: string,
              zone: string,
              address: string,
              description: string,
              price: number,
              propertyImages: string,
              rooms: number,
              bathrooms: number,
              adviser: string
            },
            public matDialogref: MatDialogRef<ModalViewPropertiesComponent>
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.matDialogref.close(this.data);
  }

  closeModalView(){
    this.matDialogref.close();
  }

}
