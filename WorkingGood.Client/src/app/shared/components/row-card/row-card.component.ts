import {Component, Input, OnInit} from '@angular/core';
import {OfferIdentity} from "../../../core/models/offers/offer.Identity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css']
})
export class RowCardComponent implements OnInit {
  @Input() offer: OfferIdentity;
  @Input() isForEmployees: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToDetails(): void{
    this.router.navigate([`offers/details/${this.offer.id}`]);
  }
}
