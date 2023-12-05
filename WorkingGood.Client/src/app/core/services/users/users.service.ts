import { Injectable } from '@angular/core';
import {SignInModel} from "../../models/users/signIn.model";
import {Observable, of} from "rxjs";
import {PasswordModel} from "../../../shared/models/password.Model";
import {RemindPasswordModel} from "../../models/users/remindPassword.Model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://localhost:50001'
  constructor(private httpClient: HttpClient) { }

  signIn(signInModel: SignInModel): Observable<any>{
    return this.httpClient.post(`${this.url}/sign-in`, signInModel);
  }

  getMe(): Observable<any> {
    return this.httpClient.get(`${this.url}/me`);
  }

  changePassword(passwordModel: PasswordModel): Observable<any>{
    console.log(passwordModel);
    return of();
  }

  remindPassword(remindPasswordModel: RemindPasswordModel): Observable<any>{
    console.log(remindPasswordModel);
    return of();
  }
}
