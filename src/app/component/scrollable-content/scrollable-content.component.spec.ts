import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableContentComponent } from './scrollable-content.component';

describe('ScrollableContentComponent', () => {
  let component: ScrollableContentComponent;
  let fixture: ComponentFixture<ScrollableContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollableContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
