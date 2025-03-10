import { TestBed } from '@angular/core/testing';

import { ProductApiService } from './product-api.service';

describe('ProductApiService', () => {
  let service: ProductApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return observable', () => {
    expect(service.getAllProductsOpenApi()).withContext('observable is returned').toBeTruthy();
  });
});
