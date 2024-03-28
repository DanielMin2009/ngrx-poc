import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user';
import { UserDetails } from '../models/userDetails';

import * as fromActions from './user.actions';
import { setFilterQuery } from './user.actions';

export const featureKey = 'users';
export interface UserState {
  users: User[];
  userDetails?: UserDetails | null;
  isLoading: boolean;
  error: any | null;
  query: string | null;
}

export const initialState: UserState = {
  users: [],
  userDetails: null,
  isLoading: false,
  error: null,
  query: '',
};

export const UsersReducer = createReducer(
  initialState,
  on(fromActions.getUsers, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromActions.getUsersSucess, (state, action) => ({
    ...state,
    users: [...state.users, ...action.users],
    isLoading: false,
  })),
  on(fromActions.getUsersFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(fromActions.getUserDetailsSucess, (state, { userDetails }) => ({
    ...state,
    userDetails,
    isLoading: false,
  })),
  on(fromActions.getUserDetailsFailure, (state, { error }) => ({
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
