import { Component, OnInit } from '@angular/core';
import { registration } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
      newregistration: registration = new registration();

    registerThisNewUser() {
    console.log('registration name is ',this.newregistration);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
