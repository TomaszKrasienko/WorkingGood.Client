import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import { OffersListComponent } from './core/components/offers/offers-list/offers-list.component';
import { RowCardComponent } from './shared/components/row-card/row-card.component';
import {MatLegacyPaginatorModule as MatPaginatorModule} from "@angular/material/legacy-paginator";
import { OffersFiltersComponent } from './shared/components/offers-filters/offers-filters.component';
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyCheckboxModule as MatCheckboxModule} from "@angular/material/legacy-checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { ConfirmButtonComponent } from './shared/components/confirm-button/confirm-button.component';
import { OfferFormComponent } from './shared/components/offer-form/offer-form.component';
import { AddOfferComponent } from './core/components/offers/add-offer/add-offer.component';
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from "@angular/material/legacy-autocomplete";
import { EditOfferComponent } from './core/components/offers/edit-offer/edit-offer.component';
import { DetailsOfOfferComponent } from './core/components/offers/details-of-offer/details-of-offer.component';
import { DetailsOfOfferSummaryComponent } from './core/components/offers/details-of-offer/details-of-offer-summary/details-of-offer-summary.component';
import { SkillViewComponent } from './shared/components/skill-view/skill-view.component';
import {MatLegacyTooltipModule as MatTooltipModule} from "@angular/material/legacy-tooltip";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {HttpClientModule} from "@angular/common/http";
import {MatStepperModule} from "@angular/material/stepper";
import { MapsButtonComponent } from './shared/components/maps-button/maps-button.component';
import { CompanyFormComponent } from './shared/components/company-form/company-form.component';
import { RegisterCompanyComponent } from './core/components/companies/register-company/register-company.component';
import { EditCompanyComponent } from './core/components/companies/edit-company/edit-company.component';
import {MatLegacyMenuModule as MatMenuModule} from "@angular/material/legacy-menu";
import { RegisterEmployeeComponent } from './core/components/employees/register-employee/register-employee.component';
import { EmployeeFormComponent } from './shared/components/employee-form/employee-form.component';
import {MatLegacyFormField as MatFormField} from "@angular/material/legacy-form-field";
import { PasswordFormComponent } from './shared/components/password-form/password-form.component';
import {MatLegacyProgressBarModule as MatProgressBarModule} from "@angular/material/legacy-progress-bar";
import {MAT_LEGACY_DIALOG_DEFAULT_OPTIONS as MAT_DIALOG_DEFAULT_OPTIONS, MatLegacyDialogModule as MatDialogModule} from "@angular/material/legacy-dialog";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {MatLegacyRadioModule as MatRadioModule} from "@angular/material/legacy-radio";
import { SignUpComponent } from './core/components/users/sign-up/sign-up.component';
import { SignInComponent } from './core/components/users/sign-in/sign-in.component';
import { ChangePasswordComponent } from './core/components/users/change-password/change-password.component';
import { RemindPasswordComponent } from './core/components/users/remind-password/remind-password.component';
import { ResetPasswordComponent } from './core/components/users/reset-password/reset-password.component';
import { CompanyOffersListComponent } from './core/components/offers/company-offers-list/company-offers-list.component';
import {MatLegacyChipsModule as MatChipsModule} from "@angular/material/legacy-chips";
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
    SkillViewComponent,
    MapsButtonComponent,
    CompanyFormComponent,
    RegisterCompanyComponent,
    EditCompanyComponent,
    RegisterEmployeeComponent,
    EmployeeFormComponent,
    PasswordFormComponent,
    SignUpComponent,
    SignInComponent,
    ChangePasswordComponent,
    RemindPasswordComponent,
    ResetPasswordComponent,
    CompanyOffersListComponent
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
    MatSelectModule,
    HttpClientModule,
    MatStepperModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDialogModule,
    MatListModule,
    MatRadioModule,
    MatChipsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
