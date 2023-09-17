import {Injectable} from '@angular/core';
import {PasswordRequirementModel} from "../../models/passwordRequirement.Model";
import {PasswordRequirements} from "../../enums/passwordRequirements";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  passwordRequirements: PasswordRequirementModel[] = [
    {
      name: 'Password must contains lower case characters',
      isValid: false,
      passwordRequirement: PasswordRequirements.lowerCase
    },
    {
      name: 'Password must contains upper case characters',
      isValid: false,
      passwordRequirement: PasswordRequirements.upperCase
    },
    {
      name: 'Password must have be at least 6 characters',
      isValid: false,
      passwordRequirement: PasswordRequirements.length
    },
    {
      name: 'Password must contains at least 1 number',
      isValid: false,
      passwordRequirement: PasswordRequirements.numbers
    },
    {
      name: 'Password must contains at least 1 special character',
      isValid: false,
      passwordRequirement: PasswordRequirements.specialCharacters
    }
  ];

  constructor() {}

  getCheckedPassword(input: string): PasswordRequirementModel[] {
    let verifiedRequirementsList:PasswordRequirementModel[] = [];
    verifiedRequirementsList = this.passwordRequirements.map(x => Object.assign({}, x));

    if(this.hasLowerCase(input)){
      const lowerCaseRequirement = verifiedRequirementsList
        .find(x => x.passwordRequirement === PasswordRequirements.lowerCase);
      lowerCaseRequirement!.isValid = true;
    }
    if(this.hasLength(input)){
      const lengthRequirement = verifiedRequirementsList
        .find(x => x.passwordRequirement === PasswordRequirements.length);
      lengthRequirement!.isValid = true;
    }
    if(this.hasUpperCase(input)){
      const upperCaseRequirement = verifiedRequirementsList
        .find(x => x.passwordRequirement === PasswordRequirements.upperCase);
      upperCaseRequirement!.isValid = true;
    }
    if(this.hasNumbers(input)){
      const numberRequirement = verifiedRequirementsList
        .find(x => x.passwordRequirement === PasswordRequirements.numbers);
      numberRequirement!.isValid = true;
    }
    if(this.hasSpecialCharacters(input)){
      const specialCharactersRequirement = verifiedRequirementsList
        .find(x => x.passwordRequirement === PasswordRequirements.specialCharacters);
      specialCharactersRequirement!.isValid = true;
    }
    return verifiedRequirementsList;
  }

  private hasLowerCase(input: string): boolean{
    const regex = new RegExp('[a-z]');
    return regex.test(input);
  }

  private hasLength(input: string): boolean{
    return input.length > 6;
  }

  private hasUpperCase(input: string): boolean{
    const regex = new RegExp('[A-Z]');
    return regex.test(input);
  }

  private hasNumbers(input: string): boolean{
    const regex = new RegExp('[0-9]');
    return regex.test(input);
  }

  private hasSpecialCharacters(input: string): boolean{
    const regex = new RegExp('[@$!%*?&]');
    return regex.test(input);
  }
}
