import { Component, OnInit } from '@angular/core';
import {SignUpModel} from "../../../core/models/users/signUp.model";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css', './../../../app.component.css']
})
export class UserRegistrationFormComponent implements OnInit {
  signUpUser: Partial<SignUpModel> = {};
  userForm = this.formBuilder.group({
    email: [this.signUpUser.email, [Validators.required, Validators.email]],
    firstName: [this.signUpUser.firstName, [Validators.required]],
    lastName: [this.signUpUser.lastName, [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
