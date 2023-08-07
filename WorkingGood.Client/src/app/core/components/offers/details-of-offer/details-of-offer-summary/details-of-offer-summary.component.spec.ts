import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfOfferSummaryComponent } from './details-of-offer-summary.component';

describe('DetailsOfOfferSummaryComponent', () => {
  let component: DetailsOfOfferSummaryComponent;
  let fixture: ComponentFixture<DetailsOfOfferSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfOfferSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfOfferSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
