import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {
  offersStatuses: string[] = ['Accepted', 'Rejected'];
  experienceLevels: string[] = ['Intern', 'Junior', 'Mid', 'Senior', 'Architect']
  mainTechnologies: string[] = ['Angular', '.Net', 'Java', 'Python']

  constructor() { }

  getOffersStatuses(): Observable<any>{
    return of(this.offersStatuses);
  }

  getExperienceLevels(): Observable<any>{
    return of(this.experienceLevels);
  }

  getTechnologies(): Observable<any>{
    return of(this.mainTechnologies);
  }
}
