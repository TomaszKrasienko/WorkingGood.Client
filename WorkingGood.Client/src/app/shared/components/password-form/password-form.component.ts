import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PasswordModel} from "../../models/password.Model";
import {AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {PasswordRequirements} from "../../enums/passwordRequirements";
import {passwordConfirmationValidator} from "../../validators/passwordConfirmationValidator";
import {passwordStrengthValidator} from "../../validators/passwordStrengthValidator";
import {PasswordService} from "../../services/password/password.service";
import {PasswordRequirementModel} from "../../models/passwordRequirement.Model";

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css', './../../../app.component.css']
})
export class PasswordFormComponent implements OnInit {
  @Output() passwordEventEmitter = new EventEmitter<PasswordModel>();
  passwordRequirements: PasswordRequirementModel[] = [];
  passwordModel: Partial<PasswordModel> = {};
  passwordFormGroup = this.formBuilder.group({
    password:[this.passwordModel.password, [Validators.required, passwordStrengthValidator()]],
    passwordConfirmation:[this.passwordModel.passwordConfirmation, [Validators.required]]
  }, {validators: [passwordConfirmationValidator()]})
  constructor(private formBuilder: FormBuilder, private passwordService: PasswordService) { }

  ngOnInit(): void {
    this.passwordRequirements = this.passwordService.passwordRequirements;
  }

  submit(): void{
    this.passwordEventEmitter.emit(this.passwordFormGroup.value as PasswordModel);
  }

  checkPasswordStrength(): void{
    this.passwordRequirements = this.passwordService.getCheckedPassword((this.passwordFormGroup.get('password')?.value as string));
  }
}




