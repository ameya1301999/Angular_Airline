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
}
