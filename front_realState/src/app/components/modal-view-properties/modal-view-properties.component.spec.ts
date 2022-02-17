import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewPropertiesComponent } from './modal-view-properties.component';

describe('ModalViewPropertiesComponent', () => {
  let component: ModalViewPropertiesComponent;
  let fixture: ComponentFixture<ModalViewPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalViewPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
