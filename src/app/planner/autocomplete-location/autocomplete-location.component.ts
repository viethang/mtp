import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autocomplete-location',
  templateUrl: './autocomplete-location.component.html',
  styleUrls: ['./autocomplete-location.component.css']
})
export class AutocompleteLocationComponent implements OnInit {
  public selected = {description: ''};
  public openOnFocus = false;

  constructor(private http: HttpClient) {
  }

  public observableSource(keyword: any): Observable<any> {
    const url = `http://localhost:8080/otp/routers/default/geocode?query=${keyword}`;
    if (keyword) {
      return this.http.get(url);

    } else {
      return Observable.of([]);
    }
  }

  public addressFormatter(address) {
    return address.description;
  }

  public valueChangeHandle($event) {
    this.selected = $event;

  }

  ngOnInit() {
  }

}
