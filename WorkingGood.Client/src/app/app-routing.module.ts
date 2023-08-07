import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OffersListComponent} from "./core/components/offers/offers-list/offers-list.component";
import {AddOfferComponent} from "./core/components/offers/add-offer/add-offer.component";
import {DetailsOfOfferComponent} from "./core/components/offers/details-of-offer/details-of-offer.component";

const routes: Routes = [
  {path:'offers/offersList', component: OffersListComponent},
  {path: '', redirectTo: 'offers/offersList', pathMatch:'full'},
  {path:'offers/add', component: AddOfferComponent},
  {path:'offers/details/:id', component: DetailsOfOfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
