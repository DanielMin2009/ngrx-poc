import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// Shared
import { INFINITE_SCROLL } from 'src/app/shared/definitions/units';

// Definitions
import { Beer } from './models/beer';
import { BeerDetails } from './models/beerDetails';

const API_URL_DETAIL = 'https://api.punkapi.com/v2/beers?ids=';
@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getBeers({
    page = INFINITE_SCROLL.page,
    limit = INFINITE_SCROLL.limit,
  }): Observable<Beer[]> {
    return this.http.get<Beer[]>(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`
    );
  }

  getBeerById(id: number): Observable<BeerDetails[]> {
    return this.http.get<BeerDetails[]>(`${API_URL_DETAIL}${id}`);
  }
}
