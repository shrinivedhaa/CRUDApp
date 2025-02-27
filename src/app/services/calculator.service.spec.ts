import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add(2, 2) should return 4', () =>{
    expect(service).toBeTruthy();
    expect(service.add(2,2)).toBe(4);
  });

  it('add null should return null', () => {
    expect(service).toBeTruthy();
    expect(service.add(undefined, undefined)).toBe(null);
  });
  
  it('#getBalance should return current balance', ()=>{
    service.balance=0;
    expect(service.getBalance()).withContext('get balance').toBe(0);
  })

  it('#addToBalance should return updated new balance', ()=>{
    service.balance=50;
    expect(service.addToBalance(100)).withContext('get new balance').toBe(150);
  })

  it('#addToBalance (-ve value) should return error', ()=>{
    service.balance=0;
    expect(()=>service.addToBalance(-100)).withContext('get -ve balance').toThrowError('Amount cannot be negative');
  })
});
