import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetBrowser } from './asset-browser.component';

describe('AssetBrowser', () => {
  let component: AssetBrowser;
  let fixture: ComponentFixture<AssetBrowser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetBrowser ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetBrowser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
