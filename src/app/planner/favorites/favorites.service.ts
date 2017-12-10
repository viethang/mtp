import { Injectable } from '@angular/core';
import { FavoriteDepArr } from './favorites.component';
import { Place } from '../planner.module';
import { GeoLocation } from '../searchbox/searchbox.component';

@Injectable()
export class FavoritesService {

  public favoriteDepArrs: FavoriteDepArr[];

  constructor() {
    this.favoriteDepArrs = this.loadFavorites();
  }

  public addFavorite(dep: GeoLocation, arr: GeoLocation) {
    this.favoriteDepArrs.push({departure: dep, arrival: arr});
    window.localStorage.setItem('FavoriteDepArrs', JSON.stringify(this.favoriteDepArrs));
  }

  private loadFavorites(): FavoriteDepArr[] {
    const savedFavorites = JSON.parse(window.localStorage.getItem('FavoriteDepArrs'));
    if (!savedFavorites) {
      return [];
    }
    return <FavoriteDepArr[]> savedFavorites;
  }

}
