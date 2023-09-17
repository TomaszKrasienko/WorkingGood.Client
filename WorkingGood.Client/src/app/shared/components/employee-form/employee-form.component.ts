import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EmployeeModel} from "../../../core/models/employees/employee.Model";
import {EmployeeRoleIdentify} from "../../../core/models/employees/employeeRole.Identify";
import {EmployeesService} from "../../../core/services/employees/employees.service";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css', './../../../app.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: Partial<EmployeeModel> = {};
  @Input() hideSubmitButton = false;
  @Input() isFirstUser = false;
  @Output() employeeEventEmitter = new EventEmitter<EmployeeModel>();

  employeesRoles: EmployeeRoleIdentify[] = [];
  employeeForm = this.formBuilder.group({
    email: [this.employee.email, [Validators.required, Validators.email]],
    firstName: [this.employee.firstName, [Validators.required]],
    lastName: [this.employee.lastName, [Validators.required]],
    role: [this.employee.role, [Validators.required]],
  })
  constructor(private formBuilder: FormBuilder, private employeesServices: EmployeesService) { }

  ngOnInit(): void {
    this.employeesServices.getEmployeesRoles().subscribe((result: EmployeeRoleIdentify[]) =>{
      this.employeesRoles = result;
    })
    if(this.isFirstUser){
      const role: EmployeeRoleIdentify | undefined = this.employeesRoles.find(x => x.name === 'Administrator');
      if(role !== undefined) {
        this.employeeForm.get('role')?.setValue(role.id);
      }
    }
  }

  submit(): void{
    this.employeeEventEmitter.emit(this.employeeForm.value as EmployeeModel);
  }

}
