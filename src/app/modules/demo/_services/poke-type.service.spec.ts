import { TestBed } from '@angular/core/testing';

import { PokeTypeService } from './poke-type.service';

describe('PokeTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeTypeService = TestBed.get(PokeTypeService);
    expect(service).toBeTruthy();
  });
});
