import {Injectable} from '@angular/core';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  getAccessToken(): any {
    return localStorage.getItem('token');
  }

  getId(): any {
    let token = this.getAccessToken();
    console.log(jwt_decode(String(token)))
    return Object(jwt_decode(String(token))).id
  }

  getEmail(): any {
    let token = this.getAccessToken();
    console.log(jwt_decode(String(token)))
    return Object(jwt_decode(String(token))).sub
  }

  getName(): any {
    let token = this.getAccessToken();
    return Object(jwt_decode(String(token))).name

  }


  isAuthenticated() {
    if (this.getAccessToken() === '' || this.getAccessToken() == undefined)
    {
      return false;
    }else{
      return true;
    }
  }
}
