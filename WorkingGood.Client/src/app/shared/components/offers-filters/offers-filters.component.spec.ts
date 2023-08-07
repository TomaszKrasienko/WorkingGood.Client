import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersFiltersComponent } from './offers-filters.component';

describe('OffersFiltersComponent', () => {
  let component: OffersFiltersComponent;
  let fixture: ComponentFixture<OffersFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
