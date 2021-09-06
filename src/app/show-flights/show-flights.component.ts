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
    {flightNumber: 100, flightName: "Luftha", flightSource: "Mumbai", flightTarget: "Germany",
  crewList:[
    {firstName:'Ameya',age:20,designation:"Pilot"},
    {firstName:'Jane',age:20,designation:"Caption"},
    {firstName:'Jack',age:20,designation:"Pilot"},
  ]},
    {flightNumber: 200, flightName: "Luftha", flightSource: "Pune", flightTarget: "London",
    crewList: [
      {firstName:'ABC',age:20,designation:"Pilot"},
      {firstName:'XYZ',age:20,designation:"Caption"},
      {firstName:'MNO',age:20,designation:"Pilot"},
    ]},
    {flightNumber: 300, flightName: "Luftha", flightSource: "Nagpur", flightTarget: "America",
    crewList:[
      {firstName:'EFG',age:20,designation:"Pilot"},
      {firstName:'HIJ',age:20,designation:"Caption"},
      {firstName:'KLM',age:20,designation:"Pilot"},
    ]}, 
    {flightNumber: 400, flightName: "Luftha", flightSource: "Delhi", flightTarget: "Tokyo", 
    crewList:[
      {firstName:'CBA',age:20,designation:"Pilot"},
      {firstName:'GFE',age:20,designation:"Caption"},
      {firstName:'ONM',age:20,designation:"Pilot"},
    ]},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
