import {Injectable} from "@angular/core";
import {CanActivate, GuardResult, MaybeAsync, Router} from "@angular/router";
import {AuthService} from "../model/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(): MaybeAsync<GuardResult> {
    if (!this.authService.authenticated) {
      this.router.navigateByUrl('/admin/auth');
      return false;
    }
    return true;
  }
}
