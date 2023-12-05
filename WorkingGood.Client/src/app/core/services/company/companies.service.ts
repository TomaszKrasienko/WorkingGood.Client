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
      id:'74d42112-fa74-4dc1-94bf-0562a3987123',
      name: 'TestCompany',
      description: 'Jakiś opis firmy Jakiś opis firmy Jakiś opis firmy Jakiś opis firmy Jakiś opis firmy Jakiś opis firmy',
      logo: null,
      activeOfferQuantity: 10,
      contactEmail: 'email@eamil.com',
      location: 'Warsaw Al. Jerozolimskie 100',
      urlLink: 'www.x-kom.pl'
    },
    {
      id:'74d42112-fa74-4dc1-94bf-0562a398760d',
      name: 'TestCompany',
      description: 'Jakiś opis firmy',
      logo: null,
      activeOfferQuantity: 1012,
      contactEmail: 'email@eamil.com',
      location: 'Warsaw Al. Jerozolimskie 100',
      urlLink: 'www.x-kom.pl'
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

  getCompanies(): Observable<any>{
    return of(this.companiesList);
  }

  getCompanyById(id: string): Observable<any>{
    let elements = this.companiesList
      .filter(x => x.id === id);
    return of(
      elements[0]
      );
  }
}
