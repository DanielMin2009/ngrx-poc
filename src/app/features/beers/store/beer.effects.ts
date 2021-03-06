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
      exhaustMap((action) =>
        this.beerService.getBeers(action.filter).pipe(
          map((beers) => {
            return fromActions.getBeersSucess({ beers });
          }),
          catchError((error) => {
            return of(
              fromActions.getBeersFailure({
                error: 'Ooops... Something went wrong',
              })
            );
          })
        )
      )
    );
  });

  loadBeerById$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fromActions.getBeerById),
      exhaustMap((action) =>
        this.beerService.getBeerById(action.beerId).pipe(
          map((beerDetails) => {
            return fromActions.getBeerDetailsSucess({
              beerDetails: beerDetails[0],
            });
          }),
          catchError((error) => {
            return of(fromActions.getBeerDetailsFailure({ error }));
          })
        )
      )
    );
  });

  constructor(private action$: Actions, private beerService: BeerService) {}
}
