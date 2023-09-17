import { Injectable } from '@angular/core';
import {EmployeeRoleIdentify} from "../../models/employees/employeeRole.Identify";
import {Observable, of} from "rxjs";
import {PasswordRequirements} from "../../../shared/enums/passwordRequirements";
import {PasswordRequirementModel} from "../../../shared/models/passwordRequirement.Model";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employeesRoles: EmployeeRoleIdentify[] = [
      {
        id: 'f7b198bf-eeaa-4d73-9a8c-45b8f2c29eb9',
        name: 'Administrator'
      },
      {
        id: 'a2e1d8e3-6fc9-4c63-9d20-8bf53d692a0d',
        name: 'User'
      }
    ];
  constructor() { }

  getEmployeesRoles(): Observable<EmployeeRoleIdentify[]>{
    return of(this.employeesRoles);
  }
}
