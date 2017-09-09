import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAsset } from './latest-asset.component';

describe('LatestAsset', () => {
  let component: LatestAsset;
  let fixture: ComponentFixture<LatestAsset>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestAsset ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAsset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
