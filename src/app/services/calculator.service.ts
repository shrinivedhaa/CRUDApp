import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  balance = 10;
  constructor() { }

  add(n1?: number, n2?:number):number|null|undefined{
    if(n1!=undefined && n2!=undefined)
      return n1+n2;
    else
      return null;
  }

  addToBalance(amount: number):number{
    
    if(amount<0){
      console.log('amount -ve'+amount);
      throw new Error('Amount cannot be negative');
    }
    this.balance+=amount;
    return this.balance;
  }

  subFromBalance(amount: number):number{
    if(amount>this.balance)
      throw new Error('Insufficient');
    this.balance-=amount;
    return this.balance;
  }

  getBalance():number{
    return this.balance;
  }
}
