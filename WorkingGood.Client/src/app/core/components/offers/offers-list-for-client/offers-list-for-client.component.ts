import { Component, OnInit } from '@angular/core';
import {OffersService} from "../../../services/offfers/offers.service";
import {LegacyPageEvent as PageEvent} from "@angular/material/legacy-paginator";
import {OfferIdentity} from "../../../models/offers/offer.Identity";
import {OffersListFilterModel} from "../../../../shared/models/offersListFilter.Model";
import {of} from "rxjs";

@Component({
  selector: 'app-offers-list-for-client',
  templateUrl: './offers-list-for-client.component.html',
  styleUrls: ['./offers-list-for-client.component.css']
})
export class OffersListForClientComponent implements OnInit {
  sideNavOpened: boolean = false;
  paginationLength: number = 100;
  paginationPageSize: number = 15;
  paginationPageIndex: number = 0;
  activeOffersList: OfferIdentity[] = [];
  offersListFilter?: OffersListFilterModel;

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
    this.offersListFilter = offersListFilter;
  }

  confirmFilters(): void{
    this.sideNavOpened = !this.sideNavOpened;
  }

  private _setOffersList(): void{
    let pageNumber = this.paginationPageIndex + 1;
    this._offersService.getActiveOffersList(pageNumber, this.paginationPageSize,undefined,undefined,undefined,undefined)
      .subscribe((result: OfferIdentity[]) => {
        this.activeOffersList = result;
      });
  }
}
