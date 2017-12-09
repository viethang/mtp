import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autocomplete-location',
  templateUrl: './autocomplete-location.component.html',
  styleUrls: ['./autocomplete-location.component.css']
})
export class AutocompleteLocationComponent implements OnInit {
  public selected;
  public openOnFocus = false;

  @Output()
  public locationSelected = new EventEmitter();

  @Input()
  public placeholder: string;

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
    this.selected = $event.description;
    this.locationSelected.emit($event);
  }

  ngOnInit() {
  }

}
