import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, Input} from '@angular/core';
import {OffersListFilterModel} from "../../../models/offersListFilter.Model";
import {DictionariesService} from "../../../../core/services/dictionaries/dictionaries.service";
import {FiltersService} from "../../../services/filters/filters.service";

@Component({
  selector: 'app-offers-filters',
  templateUrl: './offers-filters.component.html',
  styleUrls: ['./offers-filters.component.css']
})
export class OffersFiltersComponent implements OnInit {
  @Input() isCompanyMode: boolean = false;
  @Output() filterEventEmitter = new EventEmitter<OffersListFilterModel>();
  @Output() confirmEventEmitter = new EventEmitter();
  offersListFiltersModel: Partial<OffersListFilterModel> = {};
  offersStatuses: string[] = [];
  experienceLevel: string[] = [];
  technologies: string[] = [];

  constructor(private dictionariesService: DictionariesService, private filtersService: FiltersService) { }

  ngOnInit(): void {
    this._setOffersStatuses();
    this._setExperienceLevels();
    this._setTechnologies();
    //console.log(this.filtersService.getFilters());
    let savedFilters = this.filtersService.getFilters();
    if(savedFilters !== null) {
      this.offersListFiltersModel = savedFilters;
    }
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

  _setTechnologies(): void{
    this.dictionariesService.getTechnologies()
      .subscribe((result: string[]) => {
        this.technologies = result;
      });
  }

  changedExperience(level: string): void{
    if(this.offersListFiltersModel.experienceLevel === level){
      this.offersListFiltersModel.experienceLevel = undefined;
    }
    else{
      this.offersListFiltersModel.experienceLevel = level;
    }
    this.filter();
  }

  technologyChanged(): void{
    this.filter();
  }

  filter(): void {

    this.filterEventEmitter.emit(this.offersListFiltersModel as OffersListFilterModel);
  }

  confirm(): void {
    this.confirmEventEmitter.emit();
  }

  clearFilters(): void{
    this.offersListFiltersModel = {};
    this.filtersService.removeFilters();
  }
}
