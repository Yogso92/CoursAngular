import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo9tabsComponent } from './demo9tabs.component';

describe('Demo9tabsComponent', () => {
  let component: Demo9tabsComponent;
  let fixture: ComponentFixture<Demo9tabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo9tabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo9tabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
