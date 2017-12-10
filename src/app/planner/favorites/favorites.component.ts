import { Component, OnInit } from '@angular/core';
import { FavoritesService } from './favorites.service';
import { GeoLocation } from '../searchbox/searchbox.component';
import { SearchService } from '../searchbox/search.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public favoriteDepArrs: FavoriteDepArr[];

  constructor(private favoritesService: FavoritesService,
              private searchService: SearchService) {
    this.favoriteDepArrs = favoritesService.favoriteDepArrs;
  }

  ngOnInit() {
  }

  public launchSearch(favorite: FavoriteDepArr) {
      this.searchService.launchSearch(favorite.departure, favorite.arrival);
  }

}

export interface FavoriteDepArr {
  departure: GeoLocation;
  arrival: GeoLocation;
}
