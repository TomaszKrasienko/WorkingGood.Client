import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from '@angular/material/button';
import { OffersListForClientComponent } from './core/components/offers/offers-list-for-client/offers-list-for-client.component';
import { RowCardComponent } from './shared/components/offers-list/row-card/row-card.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OffersFiltersComponent } from './shared/components/offers-list/offers-filters/offers-filters.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { ConfirmButtonComponent } from './shared/components/confirm-button/confirm-button.component';
import { OfferFormComponent } from './shared/components/offer-form/offer-form.component';
import { AddOfferComponent } from './core/components/offers/add-offer/add-offer.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EditOfferComponent } from './core/components/offers/edit-offer/edit-offer.component';
import { DetailsOfOfferComponent } from './core/components/offers/details-of-offer/details-of-offer.component';
import { DetailsOfOfferSummaryComponent } from './core/components/offers/details-of-offer/details-of-offer-summary/details-of-offer-summary.component';
import { SkillViewComponent } from './shared/components/skill-view/skill-view.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from "@angular/common/http";
import {MatStepperModule} from "@angular/material/stepper";
import { MapsButtonComponent } from './shared/components/maps-button/maps-button.component';
import { CompanyFormComponent } from './shared/components/company-form/company-form.component';
import { RegisterCompanyComponent } from './core/components/companies/register-company/register-company.component';
import { EditCompanyComponent } from './core/components/companies/edit-company/edit-company.component';
import {MatMenuModule} from '@angular/material/menu';
import { RegisterEmployeeComponent } from './core/components/employees/register-employee/register-employee.component';
import { EmployeeFormComponent } from './shared/components/employee-form/employee-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PasswordFormComponent } from './shared/components/password-form/password-form.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule}  from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { SignUpComponent } from './core/components/users/sign-up/sign-up.component';
import { SignInComponent } from './core/components/users/sign-in/sign-in.component';
import { ChangePasswordComponent } from './core/components/users/change-password/change-password.component';
import { RemindPasswordComponent } from './core/components/users/remind-password/remind-password.component';
import { ResetPasswordComponent } from './core/components/users/reset-password/reset-password.component';
import { OffersListForEmployeeComponent } from './core/components/offers/offers-list-for-employee/offers-list-for-employee.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CompaniesListComponent } from './core/components/companies/companies-list/companies-list.component';
import { CompanyDetailsComponent } from './core/components/companies/company-details/company-details.component';
import { CompanySectionComponent } from './core/components/companies/company-details/company-section/company-section.component';
import {OffersListComponent} from "./shared/components/offers-list/offers-list.component";
import { SavedOffersComponent } from './core/components/users/saved-offers/saved-offers.component';
import { NotificationsComponent } from './core/components/notifications/notifications.component';
import { UserRegistrationFormComponent } from './shared/components/user-registration-form/user-registration-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OffersListForClientComponent,
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
    OffersListForEmployeeComponent,
    CompaniesListComponent,
    CompanyDetailsComponent,
    CompanySectionComponent,
    OffersListComponent,
    SavedOffersComponent,
    NotificationsComponent,
    UserRegistrationFormComponent
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
    MatChipsModule,
    MatSlideToggleModule,
    MatFormFieldModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
