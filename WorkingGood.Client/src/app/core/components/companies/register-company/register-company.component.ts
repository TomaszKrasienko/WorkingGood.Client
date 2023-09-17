import { Component, OnInit } from '@angular/core';
import {CompanyModel} from "../../../models/companies/company.Model";
import {EmployeeModel} from "../../../models/employees/employee.Model";
import {PasswordModel} from "../../../../shared/models/password.Model";
import {RegisterCompanyModel} from "../../../models/companies/registerCompany.Model";
import {CompaniesService} from "../../../services/company/companies.service";
import {DialogData} from "../../../../shared/models/dialogData";
import {Dialog} from "@angular/cdk/dialog";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  icCompanyFilled: boolean = false;
  isEmployeeFilled: boolean = false;
  company: CompanyModel;
  employee: EmployeeModel;

  constructor(private companiesService: CompaniesService, private dialog: Dialog, private router: Router) { }

  ngOnInit(): void {
  }

  getCompany(company: CompanyModel): void {
    console.log(company);
    this.icCompanyFilled = true;
    this.company = company;
  }

  getEmployee(employee: EmployeeModel): void {
    console.log(employee);
    this.isEmployeeFilled = true;
    this.employee = employee;
  }

  register(password: PasswordModel): void{
    console.log('Register company working');
    let registerCompanyModel: RegisterCompanyModel = {
      name: this.company?.name,
      description: this.company?.description,
      logo: this.company?.logo,
      email: this.employee?.email,
      firstName: this.employee?.firstName,
      lastName: this.employee?.lastName,
      role: this.employee?.role,
      password: password?.password,
      passwordConfirmation: password?.passwordConfirmation
    }
    this.openSuccessWindow();
    // this.companiesService.registerCompany(registerCompanyModel)
    //   .subscribe(result => {
    //     this.openSuccessWindow();
    //   });
  }


  openSuccessWindow(): void{
    Swal.fire({
      title: 'Company registered!',
      text: '',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((alertResult) => {
      if(alertResult.isConfirmed){
        this.router.navigate(['/users/sign-in']);
      }
    });
  }

}
