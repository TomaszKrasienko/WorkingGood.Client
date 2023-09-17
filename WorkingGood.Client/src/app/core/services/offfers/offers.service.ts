import { Injectable } from '@angular/core';
import {OfferIdentity} from "../../models/offers/offer.Identity";
import {Observable, of} from "rxjs";
import {PositionIdentity} from "../../models/positions/position.identity";
import {OfferModel} from "../../models/offers/offer.model";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private activeOffersList: OfferIdentity[] = [
    {
      id: '74d42112-fa74-4dc1-94bf-0562a398760d',
      title: 'Java developer do projektu dla firmy z elektrowniami wiatrowymi ',
      ContractSalaryRangeMin: 10_000,
      ContractSalaryRangeMax: 15_000,
      description: 'Jakieś tam wymagania, które na pewno nikt nie spełni. Ta ta t at a ta Proba edycji przez menadżera 123 1. asdnsajdnsjansdjnasjdnaksnd kasndkasndkj ansdkansjkdna skdnaksjdnajk sndjkasndkajs ndkasndkan jsdkansdjans jkdanskdn askjdnask jdnakjsndkasda knskdanskd',
      companyId: '1d096721-ed8c-4534-886d-1c7ab9ce0ce1',
      skillsList: [
        {
          name: 'REST API',
          isRequired: true,
          level: 4
        },
        {
          name: 'NHibernate',
          isRequired: true,
          level: 4
        },
        {
          name: 'PostgreeSQL',
          isRequired: true,
          level: 3
        },
        {
          name: 'Jenkins',
          isRequired: false,
          level: 2
        },
        {
          name: 'GIT',
          isRequired: true,
          level: 5
        },
        {
          name: 'Kubernetes',
          isRequired: false,
          level: 3
        }
        ],
      position: {
        id: '12345',
        name: '.Net Developer',
        level: 'Senior'
      },
      type:'Remote',
      offerStatus: 'active',
      companyLogo: 'data:image/jpeg;base64,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',
      companyName: 'Comarch'
    },
    {
      id: '74d42177-fa74-4dc1-94bf-0562a398760d',
      title: 'Java developer do projektu dla firmy z elektrowniami wiatrowymi ',
      ContractSalaryRangeMin: 9_000,
      ContractSalaryRangeMax: 13_000,
      B2BSalaryRangeMin: 10_000,
      B2BSalaryRangeMax: 15_000,
      description: 'Jakieś tam wymagania, które na pewno nikt nie spełni. Ta ta t at a ta Proba edycji przez menadżera 123 1. asdnsajdnsjansdjnasjdnaksnd kasndkasndkj ansdkansjkdna skdnaksjdnajk sndjkasndkajs ndkasndkan jsdkansdjans jkdanskdn askjdnask jdnakjsndkasda knskdanskd',
      companyId: '1d096721-ed8c-4534-886d-1c7ab9ce0ce1',
      skillsList: [
        {
          name: 'REST API',
          isRequired: true,
          level: 4
        },
        {
          name: 'NHibernate',
          isRequired: true,
          level: 4
        },
        {
          name: 'PostgreeSQL',
          isRequired: true,
          level: 3
        },
        {
          name: 'Jenkins',
          isRequired: false,
          level: 2
        },
        {
          name: 'Test 1',
          isRequired: false,
          level: 2
        },
        {
          name: 'Test 2',
          isRequired: false,
          level: 2
        },
        {
          name: 'Test 3',
          isRequired: true,
          level: 2
        },
        {
          name: 'GIT',
          isRequired: true,
          level: 5
        },
        {
          name: 'Kubernetes',
          isRequired: false,
          level: 3
        }
      ],
      position: {
        id: '12345',
        name: '.Net Developer',
        level: 'Senior'
      },
      type:'Hybrid',
      localization: 'Warszawa ul.Włościańska 10',
      offerStatus: 'active',
      companyLogo: 'data:image/jpeg;base64,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',
      companyName: 'Comarch'
    }
  ]

  private positionsList: PositionIdentity[] = [
    {
      id: '74d42177-fa74-4dc1-94bf-0562a398760d',
      name: '.Net developer',
      level:'Junior'
    },
    {
      id: '74d42177-fa74-4dc1-94bf-0562a398760d',
      name: 'Angular developer',
      level: 'Senior'
    }
  ];

  private positionsLevelsList: string[] = ['junior', 'regular', 'senior'];

  constructor() { }

  getActiveOffersList(pageNumber: number, pageSize: number, authorOffers?: boolean, rateFrom?: number, rateTo?: number, searchPhrase?: string): Observable<any>
  {
    return of(this.activeOffersList);
  }

  getOfferById(id: string): Observable<any>{
    let offer = this.activeOffersList.find(x => x.id == id);
    return of(offer);
  }

  getPositionsList(): Observable<PositionIdentity[]> {
    return of(this.positionsList);
  }

  getPositionsLevelsList(): Observable<string[]>{
    return of(this.positionsLevelsList);
  }

  addOffer(offerModel: OfferModel): void{
    console.log(offerModel);
  }
}
