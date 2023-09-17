import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  navigateToAllOffers(): void{
    this.router.navigate(['/offers/offersList'])
  }

  navigateToCompanyOffers(): void{
    this.router.navigate(['offers/companyOffersList'])
  }

  navigateToAddOffer(): void{
    this.router.navigate(['offers/add']);
  }

  navigateToRegisterCompany(): void {
    this.router.navigate(['companies/register']);
  }

  navigateToCompaniesList(): void {
    this.router.navigate(['offers/add']);
  }

  navigateToCompanyEdit(): void {
    this.router.navigate(['companies/edit']);
  }

  navigateToSignIn(): void{
    this.router.navigate(['/users/sign-in'])
  }

  navigateToSignUp(): void{
    this.router.navigate(['users/sign-up']);
  }

  navigateToChangePassword(): void {
    this.router.navigate(['/users/change-password'])
  }
}
