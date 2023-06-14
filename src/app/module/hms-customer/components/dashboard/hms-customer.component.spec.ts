import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsCustomerComponent } from './hms-customer.component';

describe('HmsCustomerComponent', () => {
  let component: HmsCustomerComponent;
  let fixture: ComponentFixture<HmsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmsCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
