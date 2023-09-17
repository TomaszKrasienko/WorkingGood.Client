export interface RegisterCompanyModel{
  name: string
  description: string;
  logo: string | null;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  passwordConfirmation: string;
}
