import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OfferIdentity} from "../../../models/offers/offer.Identity";
import {OffersService} from "../../../services/offfers/offers.service";
import {SkillModel} from "../../../models/skills/skill.model";

@Component({
  selector: 'app-details-of-offer',
  templateUrl: './details-of-offer.component.html',
  styleUrls: ['./details-of-offer.component.css']
})
export class DetailsOfOfferComponent implements OnInit {
  private id: string = '';
  offer: OfferIdentity;
  constructor(private activatedRoute: ActivatedRoute, private offersService: OffersService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      this.id = params['id'];
    })
    this.offersService.getOfferById(this.id)
      .subscribe((result: OfferIdentity) => {
        this.offer = result;
      });
  }

  getRequiredSkills(): SkillModel[]{
    return this.offer?.skillsList?.filter(x => x.isRequired === true);
  }

  getAdditionalSkills(): SkillModel[]{
    return this.offer?.skillsList?.filter(x => x.isRequired === false);
  }
}
