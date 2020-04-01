import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPage } from './dog.page';

describe('DogPage', () => {
  let component: DogPage;
  let fixture: ComponentFixture<DogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
