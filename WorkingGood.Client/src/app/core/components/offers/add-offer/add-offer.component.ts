import { Component, OnInit } from '@angular/core';
import {OfferModel} from "../../../models/offers/offer.model";
import {OffersService} from "../../../services/offfers/offers.service";
import {of} from "rxjs";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
  }

  addOffer(offerModel: OfferModel): void{
    this.offersService.addOffer(offerModel);
  }

}
