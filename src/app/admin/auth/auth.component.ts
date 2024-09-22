import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage?: string;

  constructor(private router: Router) {
  }

  login(form: NgForm) {
    if (form.valid) {
      if (this.username === 'admin' && this.password === 'admin') {
        this.router.navigateByUrl('/admin/main');
      } else {
        this.errorMessage = 'Username or password is incorrect';
      }
    } else {
      this.errorMessage = 'Username or password is incorrect';
    }
  }
}
