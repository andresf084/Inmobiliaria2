import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userInfo: any ="";
  public islog: any;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private routerService: Router
  ) { }

  ngOnInit(): void {
    this.getLoggedUser();
    this.isLogged();
  }

  getLoggedUser() {
    this.userInfo = this.cookieService.get("user")
    console.log(this.userInfo)
  }

  logOut() {
    this.cookieService.delete("token");
    this.cookieService.delete("user");
    this.routerService.navigate(['/home'])
  }

  isLogged() {
    this.islog = this.authService.isLogged();
    return this.islog
  }

}
