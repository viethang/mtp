import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Itinerary } from '../planner.module';

@Injectable()
export class SearchService {

  public gotResults: boolean;
  public itineraries: Itinerary[];

  constructor(private http: HttpClient) {
  }

  public launchSearch(departure, arrival, searchTime = '', searchDate = '') {
    const datePipe = new DatePipe('en-US');
    if (!departure || !arrival) {
      return;
    }

    if (!searchTime) {
      // no search time specified, use current time
      searchTime = datePipe.transform(new Date(), 'HH:mm');
    }

    if (!searchDate) {
      searchDate = datePipe.transform(new Date(), 'yyyy-MM-dd');
    }
    const url = 'http://localhost:8080/otp/routers/default/plan?';
    const params = new HttpParams()
      .append('fromPlace', `${departure.description} ::${departure.lat},${departure.lng}`)
      .append('toPlace', `${arrival.description} ::${arrival.lat},${arrival.lng}`)
      .append('time', `${searchTime}`)
      .append('date', `${searchDate}`)
      .append('mode', 'TRANSIT,WALK')
      .append('maxWalkDistance', '500')
      .append('arriveBy', 'false')
      .append('wheelchair', 'false')
      .append('locale', 'fr');

    this.http.get(url, {
      params: params
    }).subscribe((data) => {
      this.itineraries = this.parseItineraries(data);
      this.gotResults = true;
    });

  }

  private parseItineraries(data: any): Itinerary[] {
    //  parse itineraries from API response
    // TODO: filter only interested fields
    return data.plan.itineraries;
  }

}
