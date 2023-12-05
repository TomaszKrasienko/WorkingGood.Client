import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../services/token/token.service";
import {UsersService} from "../../services/users/users.service";
import {UserInfosIdentity} from "../../models/users/userInfos.Identity";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userFullName?: string;
  constructor(private router: Router,
              private tokenService: TokenService,
              private usersService: UsersService) { }


  ngOnInit(): void {
    if (this.userFullName === null){
      this.usersService.getMe()
        .subscribe((result: UserInfosIdentity) =>{

        })
    }
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
    this.router.navigate(['companies/companiesList']);
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

  navigateToSavedOffers(): void {
    this.router.navigate(['users/saved-offers'])
  }
}
