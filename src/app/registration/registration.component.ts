import { Component, OnInit } from '@angular/core';
import { Registration } from './registration';
import * as moment from 'moment';
import { CurrencyConvertorService } from '../currency-convertor.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newRegistration: Registration = new Registration();
  repass: string;
  year = '';
  current = '';
  flag = false;

  constructor(private ccs: CurrencyConvertorService, private vs: ValidationService) { }
  
  check(){
    this.current = moment(new Date()).format('YYYY');
    this.year = moment(this.newRegistration.birthdate).format('YYYY');

    if (this.repass !== this.newRegistration.password) {
      this.flag = false;
    }


    else if((Number(this.current) - Number(this.year) < 18) && Number(this.year) > 1970){
      this.flag = false;

    }
    else if(this.newRegistration.username.length <8 || this.newRegistration.username.length >15){
      this.flag = false;
    }
    else if(this.newRegistration.phone.length != 10){
      this.flag = false;
    }
    else if(this.newRegistration.email.length <5){
      this.flag = false
    }
    else{
      this.flag = true;
    }

   
  }

  callCurrencyRate() {
    this.ccs.findCurrencyRate();
  }

  callConvert() {
    console.log('callConvert() of registration.component.ts is called');
     this.ccs.convert();
  }

  callfindCurr()
  {
    console.log('user registration currency rate');
    this.ccs.findCurrencyRate();
  }
  validatForm()
  {
    this.vs.validateUsername(this.newRegistration.username);
  }

  onSubmit(){
    console.log(this.newRegistration);
  
  }
  ngOnInit(): void {
  }

}