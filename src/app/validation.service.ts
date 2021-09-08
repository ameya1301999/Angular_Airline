import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  validateDate() {
    console.log('date validation');
  }
  validatePhone(){
    console.log('Phone Validation');
  }
  validateUsername(uname:string){
    console.log('Username Validation');
  }
}
