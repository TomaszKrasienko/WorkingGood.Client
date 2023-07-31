import {Component, Input, OnInit} from '@angular/core';
import {OfferIdentity} from "../../../core/models/offers/Offer.Identity";

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css']
})
export class RowCardComponent implements OnInit {
  @Input() offer: OfferIdentity;
  @Input() isForEmployees: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
