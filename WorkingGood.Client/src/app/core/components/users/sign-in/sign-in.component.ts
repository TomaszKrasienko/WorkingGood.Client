import { Component, OnInit } from '@angular/core';
import {SignInModel} from "../../../models/users/signIn.model";
import {UsersService} from "../../../services/users/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', './../../../../app.component.css']
})
export class SignInComponent implements OnInit {
  signInModel: Partial<SignInModel> = {};
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void{
    this.usersService.signIn(this.signInModel as SignInModel).subscribe();
    this.router.navigate(['/']);
  }

}
