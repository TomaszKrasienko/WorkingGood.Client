import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListForEmployeeComponent } from './offers-list-for-employee.component';

describe('CompanyOffersListComponent', () => {
  let component: OffersListForEmployeeComponent;
  let fixture: ComponentFixture<OffersListForEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersListForEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersListForEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
