import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../model/auth.service";

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage?: string;

  constructor(private router: Router, private authService: AuthService) {
  }

  login(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(this.username, this.password).subscribe(response => {
        if (response) {
          this.router.navigateByUrl('/admin/main');
        }
        this.errorMessage = 'Username or password is incorrect';
      })
    } else {
      this.errorMessage = 'Username or password is incorrect';
    }
  }
}
