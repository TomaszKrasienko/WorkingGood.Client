import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OffersListComponent} from "./core/components/offers/offers-list/offers-list.component";
import {AddOfferComponent} from "./core/components/offers/add-offer/add-offer.component";
import {DetailsOfOfferComponent} from "./core/components/offers/details-of-offer/details-of-offer.component";
import {RegisterCompanyComponent} from "./core/components/companies/register-company/register-company.component";
import {EditCompanyComponent} from "./core/components/companies/edit-company/edit-company.component";
import {SignInComponent} from "./core/components/users/sign-in/sign-in.component";
import {ChangePasswordComponent} from "./core/components/users/change-password/change-password.component";
import {RemindPasswordComponent} from "./core/components/users/remind-password/remind-password.component";
import {SignUpComponent} from "./core/components/users/sign-up/sign-up.component";
import {CompanyOffersListComponent} from "./core/components/offers/company-offers-list/company-offers-list.component";

const routes: Routes = [
  {path: 'offers/offersList', component: OffersListComponent},
  {path: '', redirectTo: 'offers/offersList', pathMatch:'full'},
  {path: 'offers/add', component: AddOfferComponent},
  {path: 'offers/details/:id', component: DetailsOfOfferComponent},
  {path: 'offers/companyOffersList', component: CompanyOffersListComponent},
  {path: 'companies/register', component: RegisterCompanyComponent},
  {path: 'companies/edit', component: EditCompanyComponent},
  {path: 'users/sign-in', component: SignInComponent},
  {path: 'users/sign-up', component: SignUpComponent},
  {path: 'users/remind-password', component: RemindPasswordComponent},
  {path: 'users/change-password', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
