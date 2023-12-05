import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompaniesService} from "../../../services/company/companies.service";
import {CompanyIdentity} from "../../../models/companies/company.Identity";
import {OffersService} from "../../../services/offfers/offers.service";
import {OffersListFilterModel} from "../../../../shared/models/offersListFilter.Model";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company?: CompanyIdentity;
  isOffersVisible: boolean = false;
  offersListFilters?: OffersListFilterModel;
  constructor(private activatedRoute: ActivatedRoute,
              private companyService: CompaniesService,
              private offersService: OffersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(arg => {
      const companyId = arg['companyId'];
      if (companyId !== undefined) {
        this.companyService.getCompanyById(companyId)
          .subscribe((result: CompanyIdentity) => {
            this.company = result;
          })
      }
    });
    this.offersListFilters = {
      companyId: this.company?.id
    };
  }

  changeOffersVisibility(): void{
    this.isOffersVisible = !this.isOffersVisible;
  }

}
