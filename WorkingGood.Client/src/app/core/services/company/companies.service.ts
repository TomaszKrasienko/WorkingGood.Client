import { Injectable } from '@angular/core';
import {CompanyIdentity} from "../../models/companies/company.Identity";
import {Observable, of} from "rxjs";
import {RegisterCompanyModel} from "../../models/companies/registerCompany.Model";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  companiesList: CompanyIdentity[] = [
    {
      id:'74d42112-fa74-4dc1-94bf-0562a398760d',
      name: 'TestCompany',
      description: 'Jakiś opis firmy',
      logo: null
    }
  ]
  constructor() { }

  getCompanyUserCompany():Observable<any>{
    let company = this.companiesList.find(x => x.id === '74d42112-fa74-4dc1-94bf-0562a398760d');
    return of(company);
  }

  registerCompany(registerCompanyModel: RegisterCompanyModel): Observable<any>{
    return of();
  }
}
