import { createReducer, on } from '@ngrx/store';
import { Beer } from '../models/beer';

import * as fromActions from './beer.actions';

export const featureKey = 'beers';
export interface BeerState {
  beers: Beer[] | null;
  isLoading: boolean;
}

export const initialState: BeerState = {
  beers: null,
  isLoading: false,
};

export const BeersReducer = createReducer(
  initialState,
  on(fromActions.getBeers, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromActions.getBeersSucess, (state, { beers }) => ({
    ...state,
    beers,
    isLoading: false,
  })),
  on(fromActions.getBeersFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);
