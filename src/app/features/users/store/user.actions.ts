import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';
import { UserDetails } from '../models/userDetails';

enum Actions {
  // List
  GET_BEERS = '[BEERS] Get Users',
  GET_BEERS_SUCESS = '[BEERS] Get Users Sucess',
  GET_BEERS_FAILURE = '[BEERS] Get Users Failure',
  GET_BEER_BY_ID = '[BEERS] Select Users',
  // Details
  GET_BEER_DETAILS = '[BEER] Get User Details',
  GET_BEER_DETAILS_SUCCESS = '[BEER] Get User Details Success',
  GET_BEER_DETAILS_FAILURE = '[BEER] Get User Details Failure',
  // Filter
  SET_FILTER_QUERY = '[BEER] Set Filter By Name',
  RESET_QUERY = '[BEER] Reset Query',
}

export const getUsers = createAction(
  Actions.GET_BEERS,
  props<{ filter: { page: number; limit: number } }>()
);

export const getUsersSucess = createAction(
  Actions.GET_BEERS_SUCESS,
  props<{ users: User[] }>()
);

export const getUsersFailure = createAction(
  Actions.GET_BEERS_FAILURE,
  props<{ error: any }>()
);

export const getUserById = createAction(
  Actions.GET_BEER_BY_ID,
  props<{ userId: number }>()
);

export const getUserDetails = createAction(Actions.GET_BEER_DETAILS);

export const getUserDetailsSucess = createAction(
  Actions.GET_BEER_DETAILS_SUCCESS,
  props<{ userDetails: UserDetails }>()
);

export const getUserDetailsFailure = createAction(
  Actions.GET_BEER_DETAILS_FAILURE,
  props<{ error: any }>()
);

export const setFilterQuery = createAction(
  Actions.SET_FILTER_QUERY,
  props<{ query: string }>()
);

export const resetQuery = createAction(Actions.RESET_QUERY);
