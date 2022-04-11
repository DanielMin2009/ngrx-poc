import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// RxJS
import { filter, Observable } from 'rxjs';

// Definitions
import { Beer } from '../beers/models/beer';
import { BeerDetails } from './models/beerDetails';

// Store
import * as fromActions from './store/beer.actions';
import * as fromSelectors from './store/beer.selectors';
@Injectable({ providedIn: 'root' })
export class BeersFacade {
  isLoading$: Observable<boolean> = this.store.select(
    fromSelectors.selectIsLoading
  );

  getBeerDetails$: Observable<BeerDetails | null | undefined> =
    this.store.select(fromSelectors.selectBeerDetails);

  getBeersByName$: Observable<Beer[]> = this.store.select(
    fromSelectors.selectBeersByQuery
  );

  error$: Observable<string | null> = this.store
    .select(fromSelectors.selectGetBeersFailure)
    .pipe(
      filter((error) => {
        return !!error;
      })
    );

  constructor(private store: Store) {}

  getBeers(filter: { page: number; limit: number }): void {
    this.store.dispatch(fromActions.getBeers({ filter }));
  }

  getBeerById(beerId: number): void {
    this.store.dispatch(fromActions.getBeerById({ beerId }));
  }

  getBeersByName(query: string): void {
    this.store.dispatch(fromActions.setFilterQuery({ query }));
  }

  resetQuery(): void {
    this.store.dispatch(fromActions.resetQuery());
  }
}
