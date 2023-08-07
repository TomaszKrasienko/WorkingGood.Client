import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import { OffersListComponent } from './core/components/offers/offers-list/offers-list.component';
import { RowCardComponent } from './shared/components/row-card/row-card.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { OffersFiltersComponent } from './shared/components/offers-filters/offers-filters.component';
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { ConfirmButtonComponent } from './shared/components/confirm-button/confirm-button.component';
import { OfferFormComponent } from './shared/components/offer-form/offer-form.component';
import { AddOfferComponent } from './core/components/offers/add-offer/add-offer.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { EditOfferComponent } from './core/components/offers/edit-offer/edit-offer.component';
import { DetailsOfOfferComponent } from './core/components/offers/details-of-offer/details-of-offer.component';
import { DetailsOfOfferSummaryComponent } from './core/components/offers/details-of-offer/details-of-offer-summary/details-of-offer-summary.component';
import { SkillViewComponent } from './shared/components/skill-view/skill-view.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {NgxEditorModule} from "ngx-editor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OffersListComponent,
    RowCardComponent,
    OffersFiltersComponent,
    ConfirmButtonComponent,
    OfferFormComponent,
    AddOfferComponent,
    EditOfferComponent,
    DetailsOfOfferComponent,
    DetailsOfOfferSummaryComponent,
    SkillViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
