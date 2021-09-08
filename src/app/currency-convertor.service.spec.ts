import { TestBed } from '@angular/core/testing';

import { CurrencyConvertorService } from './currency-convertor.service';

describe('CurrencyConvertorService', () => {
  let service: CurrencyConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
