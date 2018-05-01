import { TestBed, inject } from '@angular/core/testing';

import { CountryServService } from './country-serv.service';

describe('CountryServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryServService]
    });
  });

  it('should be created', inject([CountryServService], (service: CountryServService) => {
    expect(service).toBeTruthy();
  }));
});
