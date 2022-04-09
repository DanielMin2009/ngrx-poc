import { createAction, props } from '@ngrx/store';
import { Beer } from '../models/beer';
import { BeerDetails } from '../models/beerDetails';

enum Actions {
  // List
  GET_BEERS = '[BEERS] Get Beers',
  GET_BEERS_SUCESS = '[BEERS] Get Beers Sucess, props',
  GET_BEERS_FAILURE = '[BEERS] Get Beers Failure',
  GET_BEER_BY_ID = '[BEERS] Select Beers',
  // Details
  GET_BEER_DETAILS = '[BEER] Get Beer Details',
  GET_BEER_DETAILS_SUCCESS = '[BEER] Get Beer Details Success',
  GET_BEER_DETAILS_FAILURE = '[BEER] Get Beer Details Failure',
}

export const getBeers = createAction(
  Actions.GET_BEERS,
  props<{ filter: { page: number; limit: number } }>()
);

export const getBeersSucess = createAction(
  Actions.GET_BEERS_SUCESS,
  props<{ beers: Beer[] }>()
);

export const getBeersFailure = createAction(
  Actions.GET_BEERS_FAILURE,
  props<{ error: any }>()
);

export const getBeerById = createAction(
  Actions.GET_BEER_BY_ID,
  props<{ beerId: number }>()
);

export const getBeerDetails = createAction(Actions.GET_BEER_DETAILS);

export const getBeerDetailsSucess = createAction(
  Actions.GET_BEER_DETAILS_SUCCESS,
  props<{ beerDetails: BeerDetails }>()
);

export const getBeerDetailsFailure = createAction(
  Actions.GET_BEER_DETAILS_FAILURE,
  props<{ error: any }>()
);
