import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {OffersListFilterModel} from "../../models/offersListFilter.Model";

@Component({
  selector: 'app-offers-filters',
  templateUrl: './offers-filters.component.html',
  styleUrls: ['./offers-filters.component.css']
})
export class OffersFiltersComponent implements OnInit {
  @Output() filterEventEmitter = new EventEmitter<OffersListFilterModel>();
  offersListFiltersModel: Partial<OffersListFilterModel> = {};

  constructor() { }

  ngOnInit(): void {
  }

  filter(): void{
    this.filterEventEmitter.emit(this.offersListFiltersModel as OffersListFilterModel);
  }




}
