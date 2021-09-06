export class Flight{
    flightNumber: number = 200;
    flightName: string = "Indian Airlines";
    flightSource: string = "London";
    flightTarget: string = "Germany";
    crewList:  Crew[];
}
export class Crew {
    firstName: string;
    age: number;
    designation: string;
}