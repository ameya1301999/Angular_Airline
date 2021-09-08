import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConvertorService {

  convert(){
    console.log('Convert is called');
  }

  constructor() { }
}
