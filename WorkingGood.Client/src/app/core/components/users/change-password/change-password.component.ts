import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../services/users/users.service";
import {PasswordModel} from "../../../../shared/models/password.Model";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(passwordModel: PasswordModel): void{
    this.usersService.changePassword(passwordModel).subscribe();
    this.openSuccessWindow();
  }

  openSuccessWindow(): void{
    Swal.fire({
      title: 'Password changed',
      text: '',
      icon: 'success',
      confirmButtonText:'Ok'
    }).then((alertResult) => {
      this.router.navigate(['/'])
    })
  }

}
