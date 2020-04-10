import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBucketPage } from './save-bucket.page';

describe('SaveBucketPage', () => {
  let component: SaveBucketPage;
  let fixture: ComponentFixture<SaveBucketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveBucketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveBucketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
