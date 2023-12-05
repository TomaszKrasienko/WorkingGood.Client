import {Component, Input, OnInit} from '@angular/core';
import {OffersListFilterModel} from "../../models/offersListFilter.Model";
import {LegacyPageEvent as PageEvent} from "@angular/material/legacy-paginator";
import {OfferIdentity} from "../../../core/models/offers/offer.Identity";
import {OffersService} from "../../../core/services/offfers/offers.service";

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  //for filters
  @Input() offersListFilters?: OffersListFilterModel;

  //for row card
  @Input() isForEmployees: boolean = false;
  @Input() isSaved: boolean = false;

  offersList: OfferIdentity[] = [];
  sideNavOpened: boolean = false;
  paginationLength: number = 100;
  paginationPageSize: number = 15;
  paginationPageIndex: number = 0;
  constructor(private _offersService: OffersService) { }

  ngOnInit(): void {
    this._setOffersList();
  }

  filterOffers(offersListFilter: OffersListFilterModel): void{
    if (this.offersListFilters === undefined) {
      this.offersListFilters = {}
    }
    this.offersListFilters.searchPhrase = offersListFilter.searchPhrase;
    this.offersListFilters.rangeFrom = offersListFilter.rangeFrom;
    this.offersListFilters.rangeTo = offersListFilter.rangeTo;
    this.offersListFilters.experienceLevel = offersListFilter.experienceLevel;
    this.offersListFilters.technologies = offersListFilter.technologies;
    this.offersListFilters.status = offersListFilter.status;
    this.offersListFilters.isMine = offersListFilter.isMine;
    this.offersListFilters.createdDate = offersListFilter.createdDate;
  }

  private _setOffersList(): void{
    let pageNumber = this.paginationPageIndex + 1;
    this._offersService.getActiveOffersList(pageNumber, this.paginationPageSize,undefined,undefined,undefined,undefined)
      .subscribe((result: OfferIdentity[]) => {
        this.offersList = result;
      });
  }

  confirmFilters(): void{
    console.log(this.offersListFilters)
    this.sideNavOpened = !this.sideNavOpened;
  }

  handlePageEvent(event: PageEvent): void {
    // this.pageSize = event.pageSize;
    // this.pageIndex = event.pageIndex;
    // this.setOffers(this._filters.rateFrom, this._filters.rateTo, this._filters.searchPhrase);
  }

}
