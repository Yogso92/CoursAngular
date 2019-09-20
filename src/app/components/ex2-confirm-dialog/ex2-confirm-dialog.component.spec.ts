import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2ConfirmDialogComponent } from './ex2-confirm-dialog.component';

describe('Ex2ConfirmDialogComponent', () => {
  let component: Ex2ConfirmDialogComponent;
  let fixture: ComponentFixture<Ex2ConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2ConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
