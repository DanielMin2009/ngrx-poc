import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// RxJS
import { Observable } from 'rxjs';

// Definitions
import { Beer } from '../beers/models/beer';

// Store
import * as fromActions from './store/beer.actions';
import * as fromSelectors from './store/beer.selectors';
@Injectable({ providedIn: 'root' })
export class BeersFacade {
  getBeers$: Observable<Beer[] | null> = this.store.select(
    fromSelectors.selectBeers
  );

  isLoading$: Observable<boolean> = this.store.select(
    fromSelectors.selectIsLoading
  );

  constructor(private store: Store) {}

  getBeers(): void {
    this.store.dispatch(fromActions.getBeers());
  }
}
