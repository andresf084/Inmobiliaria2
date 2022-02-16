import { TestBed } from '@angular/core/testing';

import { CitiesAPIService } from './cities-api.service';

describe('CitiesAPIService', () => {
  let service: CitiesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitiesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
