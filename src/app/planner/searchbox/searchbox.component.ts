import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  public fromLocation: GeoLocation;
  public toLocation: GeoLocation;
  public gotResults: boolean;
  public searchTime = '10:00';
  public searchDate = '2017-12-09';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  public fromLocationSelected($event) {
    this.fromLocation = $event;
  }

  public toLocationSelected($event) {
    this.toLocation = $event;
  }

  public launchSearch() {
    if (!this.fromLocation || !this.toLocation) {
      return;
    }
    const url = 'http://localhost:8080/otp/routers/default/plan?';
    const params = new HttpParams()
      .append('fromPlace', `${this.fromLocation.description} ::${this.fromLocation.lat},${this.fromLocation.lng}`)
      .append('toPlace', `${this.toLocation.description} ::${this.toLocation.lat},${this.toLocation.lng}`)
      .append('time', `${this.searchTime}`)
      .append('date', `${this.searchDate}`)
      .append('mode', 'TRANSIT,WALK')
      .append('maxWalkDistance', '500')
      .append('arriveBy', 'false')
      .append('wheelchair', 'false')
      .append('locale', 'fr');

    this.http.get(url, {
      params: params
    }).subscribe((data) => {
      console.log(data);
      this.gotResults = true;
    });

  }
}

export interface GeoLocation {
  description: string;
  lat: number;
  lng: number;
  id: string;
}
