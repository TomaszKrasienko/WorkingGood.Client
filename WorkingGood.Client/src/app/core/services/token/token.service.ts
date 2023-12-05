import { Injectable } from '@angular/core';
import {AccessTokenModel} from "../../models/token/accessToken.Model";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private authTokenKey = 'accessToken'
  constructor() { }

  saveAccessToken(token: AccessTokenModel): void {
    localStorage.setItem(this.authTokenKey, JSON.stringify(token));
  }

  updateAccessToken(token: AccessTokenModel): void {
    this.removeAccessToken();
    this.saveAccessToken(token);
  }

  removeAccessToken(): void{
    localStorage.removeItem(this.authTokenKey);
  }

  isTokenExists(): boolean{
    return this.getAccessToken() !== null;
  }

  getAccessToken(): AccessTokenModel | null{
    let tokenJson = localStorage.getItem(this.authTokenKey);
    if (tokenJson !== null) {
      return JSON.parse(tokenJson);
    }
    return null;
  }
}
