import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';

import { Beer } from './models/beer';
import { BeerDetails } from './models/beerDetails';

const API_URL_LIST = 'https://api.punkapi.com/v2/beers';
const API_URL_DETAIL = 'https://api.punkapi.com/v2/beers?ids=';
@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(API_URL_LIST);
  }

  getBeerById(id: number): Observable<BeerDetails[]> {
    return this.http.get<BeerDetails[]>(`${API_URL_DETAIL}${id}`);
  }
}
