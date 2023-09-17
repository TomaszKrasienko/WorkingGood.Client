import { Component, OnInit } from '@angular/core';
import {RemindPasswordModel} from "../../../models/users/remindPassword.Model";
import {UsersService} from "../../../services/users/users.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['./remind-password.component.css', './../../../../app.component.css']
})
export class RemindPasswordComponent implements OnInit {
  remindPasswordModel: Partial<RemindPasswordModel> = {};
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void{
    this.usersService.remindPassword(this.remindPasswordModel as RemindPasswordModel).subscribe();
    this.openSuccessWindow();
  }

  openSuccessWindow(): void{
    Swal.fire({
      title: 'Go to email',
      text: 'Please, check email for link to reset password',
      icon: 'info',
      confirmButtonText:'Ok'
    }).then((alertResult) => {
      this.router.navigate(['/'])
    })
  }
}
