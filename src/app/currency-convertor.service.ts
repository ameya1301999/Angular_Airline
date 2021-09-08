import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConvertorService {
  constructor() {}
  convert(){
    console.log('Convert is called');
    this.findCurrencyRate();
  }
  findCurrencyRate() {
    console.log('Finding Currency Rate');
  }
}
