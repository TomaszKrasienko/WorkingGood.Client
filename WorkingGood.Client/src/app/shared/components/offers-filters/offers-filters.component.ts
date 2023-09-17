import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {OffersListFilterModel} from "../../models/offersListFilter.Model";
import {DictionariesService} from "../../../core/services/dictionaries/dictionaries.service";

@Component({
  selector: 'app-offers-filters',
  templateUrl: './offers-filters.component.html',
  styleUrls: ['./offers-filters.component.css']
})
export class OffersFiltersComponent implements OnInit {
  @Output() filterEventEmitter = new EventEmitter<OffersListFilterModel>();
  offersListFiltersModel: Partial<OffersListFilterModel> = {};
  offersStatuses: string[] = [];
  experienceLevel: string[] = [];

  constructor(private dictionariesService: DictionariesService) { }
  // constructor() {
  // }
  ngOnInit(): void {
    this._setOffersStatuses();
    this._setExperienceLevels();
  }

  _setOffersStatuses(): void{
    this.dictionariesService.getOffersStatuses()
      .subscribe((result: string[]) => {
        this.offersStatuses = result;
    })
  }

  _setExperienceLevels(): void{
    this.dictionariesService.getExperienceLevels()
      .subscribe((result: string[]) => {
        this.experienceLevel = result;
      });
  }

  filter(): void{
    console.log(this.offersListFiltersModel);
    this.filterEventEmitter.emit(this.offersListFiltersModel as OffersListFilterModel);
  }




}
