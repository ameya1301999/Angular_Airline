import { Component, OnInit } from '@angular/core';
import { Flight } from './Flight';

@Component({
  selector: 'app-show-flights',
  templateUrl: './show-flights.component.html',
  styleUrls: ['./show-flights.component.css']
})
export class ShowFlightsComponent implements OnInit {

  title: string ="Showing All Flights";
  flightNumber: number = 100;
  flightName: string="Air India";
  flightSource: string="Mumbai";
  flightTarget: string ="Paris";

  flightObj: Flight = new Flight(); 

  flightList: Flight[] = [
    {flightNumber: 100, flightName: "Luftha", flightSource: "Mumbai", flightTarget: "Germany"},
    {flightNumber: 200, flightName: "Luftha", flightSource: "Pune", flightTarget: "London"},
    {flightNumber: 300, flightName: "Luftha", flightSource: "Nagpur", flightTarget: "America"}, 
    {flightNumber: 400, flightName: "Luftha", flightSource: "Delhi", flightTarget: "Tokyo"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
