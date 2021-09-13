import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homet',
  templateUrl: './homet.component.html',
  styleUrls: ['./homet.component.css']
})
export class HometComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  searchFlight(){
    this.route.navigate(['showFlights']);
  }

}
