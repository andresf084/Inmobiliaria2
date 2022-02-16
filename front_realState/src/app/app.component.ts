import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front_realState';
  islog: any

  constructor(
    private authService: AuthService
  ) {}

  NgOnInit () {
    this.showNavbar()
  }

  showNavbar() {
    this.islog = this.authService.isLogged();
    return this.islog
  }

}

