import { createAction, props } from '@ngrx/store';
import { Beer } from '../models/beer';

enum Actions {
  GET_BEERS = '[BEERS] Get Beers',
  GET_BEERS_SUCESS = '[BEERS] Get Beers Sucess, props',
  GET_BEERS_FAILURE = '[BEERS] Get Beers Failure',
  GET_BEER_BY_ID = '[BEERS] Select Beers',
}

export const getBeers = createAction(Actions.GET_BEERS);

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
