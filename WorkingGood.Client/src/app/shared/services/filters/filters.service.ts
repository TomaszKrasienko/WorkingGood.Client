import { Injectable } from '@angular/core';
import {OffersListFilterModel} from "../../models/offersListFilter.Model";

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private filtersKey: string = 'offersFilter';
  constructor() { }

  saveFilter(offersListFilter: OffersListFilterModel): void {
    if(offersListFilter !== undefined) {
      offersListFilter.createdDate = new Date();
      let json = JSON.stringify(offersListFilter);
      localStorage.setItem(this.filtersKey, window.btoa(json));
    }
  }

  getFilters(): OffersListFilterModel | null {
    let currentDate: Date = new Date();

    let jsonInBase = localStorage.getItem(this.filtersKey);
    if(jsonInBase === null)
    {
      return null;
    }
    let filters: OffersListFilterModel = JSON.parse(atob(jsonInBase));
    let offerDate:Date = new Date(filters.createdDate as Date);

    let offerExpirationDate: Date = new Date(offerDate.setMinutes(offerDate.getMinutes() + 5));
    if(currentDate > offerExpirationDate){
      localStorage.removeItem(this.filtersKey);
    }
    return filters;
  }

  removeFilters(): void{
    localStorage.removeItem(this.filtersKey);
  }
}
