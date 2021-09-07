import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMI Calculator';
  principal: number = 50000;
  rate: number = 5;
  years: number = 3;
  si: number = (this.principal * this.rate * this.years)/100;
  isUserLoggedIn: boolean = true;
  status: string[]=["Login","Logout"];
  current: number =0;

  calculateSimpleInterest(){
    this.si = (this.principal * this.rate * this.years)/100;
    console.log('Calculated Simple Interest',this.si);
   
  }
  checkstatus(){
    this.current = (this.current+1)%2;
  }

}

