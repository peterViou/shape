import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAssetComponent } from './modal-asset.component';

describe('ModalAssetComponent', () => {
  let component: ModalAssetComponent;
  let fixture: ComponentFixture<ModalAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
