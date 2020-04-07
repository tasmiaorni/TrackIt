import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAccountsPage } from './set-accounts.page';

describe('SetAccountsPage', () => {
  let component: SetAccountsPage;
  let fixture: ComponentFixture<SetAccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAccountsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
