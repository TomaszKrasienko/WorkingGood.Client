import {PasswordRequirements} from "../enums/passwordRequirements";

export interface PasswordRequirementModel {
  name: string;
  isValid: boolean;
  passwordRequirement: PasswordRequirements
}
