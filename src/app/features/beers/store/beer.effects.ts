import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// RxJS
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

// Actions
import * as fromActions from './beer.actions';

// Service
import { BeerService } from '../beers.service';
@Injectable()
export class BeerEffects {
  loadBeers$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fromActions.getBeers),
      exhaustMap(() =>
        this.beerService.getBeers().pipe(
          map((beers) => {
            return fromActions.getBeersSucess({ beers });
          }),
          catchError((error) => {
            return of(fromActions.getBeersFailure({ error }));
          })
        )
      )
    );
  });
  constructor(private action$: Actions, private beerService: BeerService) {}
}
