import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAccountsPage } from './home-accounts.page';

describe('HomeAccountsPage', () => {
  let component: HomeAccountsPage;
  let fixture: ComponentFixture<HomeAccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAccountsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
