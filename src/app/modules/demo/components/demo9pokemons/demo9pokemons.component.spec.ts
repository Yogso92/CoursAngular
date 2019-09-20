import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo9pokemonsComponent } from './demo9pokemons.component';

describe('Demo9pokemonsComponent', () => {
  let component: Demo9pokemonsComponent;
  let fixture: ComponentFixture<Demo9pokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo9pokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo9pokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
