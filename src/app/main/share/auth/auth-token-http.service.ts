import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class AuthTokenHttpService {

  constructor() {
  }

  public getAuthToken(): string {
    return localStorage.getItem('token');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  public getAuthTokenScopes(): string[] {

    const jwtData = this.getAuthToken().split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);
    const roles = decodedJwtData.scopes;
    return roles;
  }
}
