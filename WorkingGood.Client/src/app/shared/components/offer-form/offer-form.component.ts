import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { OfferModel } from '../../../core/models/offers/offer.model';
import {OffersService} from "../../../core/services/offfers/offers.service";
import {FormControl, Validators} from "@angular/forms";
import {map, Observable, of, startWith} from "rxjs";
import {PositionIdentity} from "../../../core/models/positions/position.identity";
@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css', './../../../app.component.css']
})
export class OfferFormComponent implements OnInit {
  @Input() pageTitle: string = 'Offers form';
  @Input() offerModel: Partial<OfferModel> = {};
  @Input() isReadonly: boolean = false;
  @Output() offerEventEmitter = new EventEmitter<OfferModel>();
  positionsList: PositionIdentity[] = [];
  filteredPositionList: Observable<PositionIdentity[]>;
  workTypes: string[] = ['remote', 'hybrid', 'on site'];
  positionsLevelList: string[] = [];

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this._setPositionsList();
    this._setPositionsLevelsList();
  }
  private _setPositionsList(): void{
    this.offersService.getPositionsList()
      .subscribe((result: PositionIdentity[]) => {
        this.positionsList = result;
        this.filteredPositionList = of(result)
      });
  }

  private _setPositionsLevelsList(): void{
    this.offersService.getPositionsLevelsList()
      .subscribe((result: string[]) => {
        this.positionsLevelList = result;
      });
  }

  filterPositions(): void{
    this.filteredPositionList = this.filteredPositionList.pipe(
      map(value => this._filter(this.offerModel.positionName  || '')));
  }

  private _filter(value: string): PositionIdentity[] {
    const filterValue = value.toLowerCase();
    return this.positionsList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  submit(): void{
    this.offerEventEmitter.emit(this.offerModel as OfferModel);
  }
}
