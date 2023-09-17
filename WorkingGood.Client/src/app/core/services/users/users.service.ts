import { Injectable } from '@angular/core';
import {SignInModel} from "../../models/users/signIn.model";
import {Observable, of} from "rxjs";
import {PasswordModel} from "../../../shared/models/password.Model";
import {RemindPasswordModel} from "../../models/users/remindPassword.Model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  signIn(signInModel: SignInModel): Observable<any>{
    console.log(signInModel);
    return of();
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
