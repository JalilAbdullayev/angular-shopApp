import {Component} from '@angular/core';
import {AuthService} from "../model/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  logout() {
    this.authService.clear();
    this.router.navigateByUrl('/');
  }
}
