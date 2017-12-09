import { Component, Input, OnInit } from '@angular/core';
import { Itinerary } from '../planner.module';

@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.css']
})
export class ItinerariesComponent implements OnInit {

  @Input()
  public itineraries: Itinerary[];

  constructor() {
  }

  ngOnInit() {
  }

}
