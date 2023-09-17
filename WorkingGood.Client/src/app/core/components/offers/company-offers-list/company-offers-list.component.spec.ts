import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOffersListComponent } from './company-offers-list.component';

describe('CompanyOffersListComponent', () => {
  let component: CompanyOffersListComponent;
  let fixture: ComponentFixture<CompanyOffersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyOffersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
