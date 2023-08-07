import {Component, Input, OnInit} from '@angular/core';
import {OfferIdentity} from "../../../../models/offers/offer.Identity";

@Component({
  selector: 'app-details-of-offer-summary',
  templateUrl: './details-of-offer-summary.component.html',
  styleUrls: ['./details-of-offer-summary.component.css']
})
export class DetailsOfOfferSummaryComponent implements OnInit {
  @Input() offer: OfferIdentity;
  constructor() { }

  ngOnInit(): void {
  }

}
