import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BeerState, featureKey } from './beer.reducer';

export const selectBeerFeature = createFeatureSelector<BeerState>(featureKey);

export const selectBeers = createSelector(
  selectBeerFeature,
  (state) => state.beers
);

export const selectIsLoading = createSelector(
  selectBeerFeature,
  (state) => !state.beers
);
