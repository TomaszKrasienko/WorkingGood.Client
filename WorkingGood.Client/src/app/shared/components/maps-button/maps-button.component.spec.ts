import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsButtonComponent } from './maps-button.component';

describe('MapsButtonComponent', () => {
  let component: MapsButtonComponent;
  let fixture: ComponentFixture<MapsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
