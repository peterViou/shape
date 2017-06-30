import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asset } from './asset.component';

describe('Asset', () => {
  let component: Asset;
  let fixture: ComponentFixture<Asset>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asset ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
