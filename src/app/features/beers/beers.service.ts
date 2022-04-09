import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
import { ITEMS_PER_PAGE } from 'src/app/shared/definitions/units';

import { Beer } from './models/beer';
import { BeerDetails } from './models/beerDetails';

const API_URL_LIST = 'https://api.punkapi.com/v2/beers';
const API_URL_DETAIL = 'https://api.punkapi.com/v2/beers?ids=';

/* https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit} */

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  /* getAll(page, limit = 20) {
    return this.http.get(
      `https://5cafa607f7850e0014629525.mockapi.io/products?page=${page}&limit=${limit}`
    );
  } */

  getBeers({ page = 1, limit = 12 }): Observable<Beer[]> {
    return this.http.get<Beer[]>(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`
    );
  }

  getBeerById(id: number): Observable<BeerDetails[]> {
    return this.http.get<BeerDetails[]>(`${API_URL_DETAIL}${id}`);
  }
}
