import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsAdminComponent } from './hms-admin.component';

describe('HmsAdminComponent', () => {
  let component: HmsAdminComponent;
  let fixture: ComponentFixture<HmsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
