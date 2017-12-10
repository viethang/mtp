import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { AutocompleteLocationComponent } from './autocomplete-location/autocomplete-location.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ItinerariesComponent } from './itineraries/itineraries.component';
import { UtilsModule } from '../utils/utils.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoritesService } from './favorites/favorites.service';
import { SearchService } from './searchbox/search.service';

@NgModule({
  imports: [
    CommonModule,
    NguiAutoCompleteModule,
    HttpClientModule,
    UtilsModule,
    BrowserModule
  ],
  declarations: [
    PlannerComponent,
    SearchboxComponent,
    AutocompleteLocationComponent,
    ItinerariesComponent,
    FavoritesComponent
  ],
  providers: [FavoritesService, SearchService],
  exports: [PlannerComponent]
})
export class PlannerModule {
}

export interface Itinerary {
  duration: number; // millisecond
  startTime: number; // millisecond
  endTime: number; // millisecond
  legs: Leg[];
}

export enum TransitMode {
  BUS,
  WALK,
  SUBWAY,
}

export enum TransitVertexType {
  NORMAL,
  TRANSIT,
}

export interface Leg {
  startTime: number; // millisecond
  duration: number; // millisecond
  endTime: number;  // millisecond
  distance: number; // metter
  mode: TransitMode;
  agencyTimeZoneOffset: number; // millisecond
  from: Place;
  to: Place;
  legGeometry: { points: string, length: number }; // points is the encoded polyline
  agencyName: string;
  headsign: string;
  serviceDate: string; // yyyyMMdd
  routeLongName: string;
  route: string;
  routesShortName: string;
}

export interface Place {
  name: string;
  lon: number;
  lat: number;
  vertexType: TransitVertexType;
  arrival: number; // millisecond
  departure: number; // millisecond
}

