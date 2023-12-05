import { Component, OnInit } from '@angular/core';
import {CompaniesService} from "../../../services/company/companies.service";
import {CompanyIdentity} from "../../../models/companies/company.Identity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  companiesList: CompanyIdentity[] = [];
  constructor(private companiesService: CompaniesService, private router: Router) { }

  ngOnInit(): void {
    this.companiesService.getCompanies()
      .subscribe(result => {
        this.companiesList = result
        console.log(result);
      });
  }


  goToDetails(companyId: string): void {
    this.router.navigate([`companies/details/${companyId}`]);
  }
}
