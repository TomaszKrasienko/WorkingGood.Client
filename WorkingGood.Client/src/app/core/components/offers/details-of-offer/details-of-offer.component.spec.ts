import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfOfferComponent } from './details-of-offer.component';

describe('DetailsOfOfferComponent', () => {
  let component: DetailsOfOfferComponent;
  let fixture: ComponentFixture<DetailsOfOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
