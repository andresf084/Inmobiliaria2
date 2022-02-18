import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AdvisersComponent } from './components/advisers/advisers.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ModalViewPropertiesComponent } from './components/modal-view-properties/modal-view-properties.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "main", component: MainComponent, pathMatch: "full"},
  {path: "advisers", component: AdvisersComponent, pathMatch: "full"},
  {path: "modalForm", component: ModalFormComponent, pathMatch: "full"},
  {path: "modalView", component: ModalViewPropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
