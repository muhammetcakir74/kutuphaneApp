export class UserAuthService {
  loggedIn = false;
  redirectUrl:string;

  isAuthenticated() {
    return this.loggedIn;
  }


  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }


}
