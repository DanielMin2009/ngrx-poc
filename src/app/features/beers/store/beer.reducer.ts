import { createReducer, on } from '@ngrx/store';
import { Beer } from '../models/beer';
import { BeerDetails } from '../models/beerDetails';

import * as fromActions from './beer.actions';
import { setFilterQuery } from './beer.actions';

export const featureKey = 'beers';
export interface BeerState {
  beers: Beer[];
  beerDetails?: BeerDetails | null;
  isLoading: boolean;
  error: any | null;
  query: string | null;
}

export const initialState: BeerState = {
  beers: [],
  beerDetails: null,
  isLoading: false,
  error: null,
  query: '',
};

export const BeersReducer = createReducer(
  initialState,
  on(fromActions.getBeers, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromActions.getBeersSucess, (state, action) => ({
    ...state,
    beers: [...state.beers, ...action.beers],
    isLoading: false,
  })),
  on(fromActions.getBeersFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(fromActions.getBeerDetailsSucess, (state, { beerDetails }) => ({
    ...state,
    beerDetails,
    isLoading: false,
  })),
  on(fromActions.getBeerDetailsFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(fromActions.setFilterQuery, (state, { query }) => ({
    ...state,
    query,
  })),
  on(fromActions.resetQuery, (state) => ({
    ...state,
    query: '',
  }))
);
