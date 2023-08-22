import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupViewComponent } from './popup-view.component';

describe('PopupViewComponent', () => {
  let component: PopupViewComponent;
  let fixture: ComponentFixture<PopupViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupViewComponent]
    });
    fixture = TestBed.createComponent(PopupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
