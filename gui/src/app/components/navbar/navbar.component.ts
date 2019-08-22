import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  loggedUser: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.loggedUser = this.authService.getLoggedUser().toLocaleUpperCase();
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}