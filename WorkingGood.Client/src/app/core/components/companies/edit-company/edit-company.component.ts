import { Component, OnInit } from '@angular/core';
import {CompaniesService} from "../../../services/company/companies.service";
import {CompanyIdentity} from "../../../models/companies/company.Identity";

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  company: CompanyIdentity;
  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.companiesService.getCompanyUserCompany().subscribe((result: CompanyIdentity) =>{
      this.company = result;
    });
  }

}
