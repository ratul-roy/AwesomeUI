import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
//import {AuthHttp, AuthConfig, AUTH_PROVIDERS, JwtHelper, tokenNotExpired} from 'angular2-jwt/angular2-jwt';
//import { CookieService} from 'angular2-cookie/core';
 
@Injectable()
export class AuthenticationService {
 jwtHelper: JwtHelper = new JwtHelper();
 //private hodor_user_cookie = "name";
  constructor(
    private _router: Router
    //private _cookieService:CookieService
    ){}
 
  // logout() {
  //   localStorage.removeItem("profile");
  //   //document.cookie = this.hodor_user_cookie + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  //   this.checkCredentials();
  // }
 
  //  checkCredentials(){
  //   if (localStorage.getItem("profile") === null){

  //       this._router.navigate(['/login']);
  //   }
  // }
  // setCredentials(token) {
  //   if(token){
  //     //debugger;
  //     localStorage.setItem("userId",  this.jwtHelper.decodeToken(token).name.replace(/@inmobi.com/, ""));
  //     //document.cookie = this.hodor_user_cookie + "=" +this.jwtHelper.decodeToken(token).name+ "; Path=/;";
  //     localStorage.setItem("profile",JSON.stringify(this.jwtHelper.decodeToken(token)));
  //     localStorage.setItem("expireDate",this.jwtHelper.getTokenExpirationDate(token).toString());
  //     localStorage.setItem("isExprired",this.jwtHelper.isTokenExpired(token).toString());
  //   }
  //   else{
  //     this.logout();
  //   }
  // } 
}