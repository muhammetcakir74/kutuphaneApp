import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserAuthService } from "src/app/users/userauth.service";


@Injectable()
export class UserAuthGuard implements CanActivate {

  constructor(private authService: UserAuthService, private router:Router) {

  }


  canActivate(next: ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    if(this.authService.isAuthenticated()) {
      return true;
    }
    else {
      this.authService.redirectUrl = state.url;
      this.router.navigate(['/user-login']);
      return false;
    }
  }
}
