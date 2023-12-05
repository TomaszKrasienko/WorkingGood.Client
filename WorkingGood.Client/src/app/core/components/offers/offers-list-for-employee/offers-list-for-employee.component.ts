import { Component, OnInit } from '@angular/core';
import {LegacyPageEvent as PageEvent} from "@angular/material/legacy-paginator";
import {OffersListFilterModel} from "../../../../shared/models/offersListFilter.Model";
import {OfferIdentity} from "../../../models/offers/offer.Identity";
import {OffersService} from "../../../services/offfers/offers.service";

@Component({
  selector: 'app-offers-list-for-employee-for-client',
  templateUrl: './offers-list-for-employee.component.html',
  styleUrls: ['./offers-list-for-employee.component.css']
})
export class OffersListForEmployeeComponent implements OnInit {
  sideNavOpened: boolean = false;
  paginationLength: number = 100;
  paginationPageSize: number = 15;
  paginationPageIndex: number = 0;

  activeOffersList: OfferIdentity[] = [];
  constructor(private _offersService: OffersService) { }

  ngOnInit(): void {
    this._setOffersList();
  }

  handlePageEvent(event: PageEvent): void {
    // this.pageSize = event.pageSize;
    // this.pageIndex = event.pageIndex;
    // this.setOffers(this._filters.rateFrom, this._filters.rateTo, this._filters.searchPhrase);
  }

  filterOffers(offersListFilter: OffersListFilterModel): void{
    console.log(offersListFilter);
  }

  private _setOffersList(): void{
    let pageNumber = this.paginationPageIndex + 1;
    this._offersService.getActiveOffersList(pageNumber, this.paginationPageSize,undefined,undefined,undefined,undefined)
      .subscribe((result: OfferIdentity[]) => {
        this.activeOffersList = result;
      });
  }

  confirmFilters(): void{
    this.sideNavOpened = !this.sideNavOpened;
  }
}
