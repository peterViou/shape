import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieAssetComponent } from './serie-asset.component';

describe('SerieAssetComponent', () => {
  let component: SerieAssetComponent;
  let fixture: ComponentFixture<SerieAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
