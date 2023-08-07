import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OffersService} from "../../../services/offfers/offers.service";
import {OfferIdentity} from "../../../models/offers/offer.Identity";

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {
  private id: string = '';
  offer: OfferIdentity;
  constructor(private activatedRoute: ActivatedRoute, private offersService: OffersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
    })
    this.offersService.getOfferById(this.id).subscribe(
      (result: OfferIdentity) => {
        this.offer = result;
      }
    )
  }

}
