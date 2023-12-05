import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListForClientComponent } from './offers-list-for-client.component';

describe('OffersListComponent', () => {
  let component: OffersListForClientComponent;
  let fixture: ComponentFixture<OffersListForClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersListForClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListForClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
