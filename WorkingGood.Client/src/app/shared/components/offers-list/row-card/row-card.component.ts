import {Component, Input, OnInit} from '@angular/core';
import {OfferIdentity} from "../../../../core/models/offers/offer.Identity";
import {Router} from "@angular/router";
import {FiltersService} from "../../../services/filters/filters.service";
import {OffersListFilterModel} from "../../../models/offersListFilter.Model";

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css']
})
export class RowCardComponent implements OnInit {
  @Input() offer?: OfferIdentity;
  @Input() isForEmployees: boolean = false;
  @Input() offersListFilter?: OffersListFilterModel;
  constructor(private router: Router, private filtersService: FiltersService) { }

  ngOnInit(): void {
  }

  redirectToDetails(): void{
    if (this.offersListFilter !== undefined) {
      this.filtersService.saveFilter(this.offersListFilter);
    }
    this.router.navigate([`offers/details/${this.offer?.id}`]);
  }
}
