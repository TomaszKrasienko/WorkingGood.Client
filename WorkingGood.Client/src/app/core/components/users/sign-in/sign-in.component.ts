import { Component, OnInit } from '@angular/core';
import {SignInModel} from "../../../models/users/signIn.model";
import {UsersService} from "../../../services/users/users.service";
import {Router} from "@angular/router";
import {AccessTokenModel} from "../../../models/token/accessToken.Model";
import {TokenService} from "../../../services/token/token.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', './../../../../app.component.css']
})
export class SignInComponent implements OnInit {
  signInModel: Partial<SignInModel> = {};
  constructor(
    private usersService: UsersService,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  submit(): void{
    this.usersService.signIn(this.signInModel as SignInModel)
      .subscribe((result: AccessTokenModel) => {
        console.log(result);
        this.tokenService.saveAccessToken(result);
        this.router.navigate(['/']);
      });
  }

}
