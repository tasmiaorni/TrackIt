import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCarPage } from './rent-car.page';

describe('RentCarPage', () => {
  let component: RentCarPage;
  let fixture: ComponentFixture<RentCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentCarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
