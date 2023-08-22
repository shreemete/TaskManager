import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdateComponent } from './popup-update.component';

describe('PopupUpdateComponent', () => {
  let component: PopupUpdateComponent;
  let fixture: ComponentFixture<PopupUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupUpdateComponent]
    });
    fixture = TestBed.createComponent(PopupUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
