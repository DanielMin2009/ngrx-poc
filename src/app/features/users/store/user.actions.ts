import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';
import { UserDetails } from '../models/userDetails';

enum Actions {
  // List
  GET_USERS = '[USERS] Get Users',
  GET_USERS_SUCESS = '[USERS] Get Users Sucess',
  GET_USERS_FAILURE = '[USERS] Get Users Failure',
  GET_USER_BY_ID = '[USERS] Select Users',
  // Details
  GET_USER_DETAILS = '[USER] Get User Details',
  GET_USER_DETAILS_SUCCESS = '[USER] Get User Details Success',
  GET_USER_DETAILS_FAILURE = '[USER] Get User Details Failure',
  // Filter
  SET_FILTER_QUERY = '[USER] Set Filter By Name',
  RESET_QUERY = '[USER] Reset Query',
}

export const getUsers = createAction(
  Actions.GET_USERS,
  props<{ filter: { page: number; limit: number } }>()
);

export const getUsersSucess = createAction(
  Actions.GET_USERS_SUCESS,
  props<{ users: User[] }>()
);

export const getUsersFailure = createAction(
  Actions.GET_USERS_FAILURE,
  props<{ error: any }>()
);

export const getUserById = createAction(
  Actions.GET_USER_BY_ID,
  props<{ userId: number }>()
);

export const getUserDetails = createAction(Actions.GET_USER_DETAILS);

export const getUserDetailsSucess = createAction(
  Actions.GET_USER_DETAILS_SUCCESS,
  props<{ userDetails: UserDetails }>()
);

export const getUserDetailsFailure = createAction(
  Actions.GET_USER_DETAILS_FAILURE,
  props<{ error: any }>()
);

export const setFilterQuery = createAction(
  Actions.SET_FILTER_QUERY,
  props<{ query: string }>()
);

export const resetQuery = createAction(Actions.RESET_QUERY);
