import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, featureKey } from './user.reducer';

export const selectUserFeature = createFeatureSelector<UserState>(featureKey);

export const selectUsers = createSelector(
  selectUserFeature,
  (state) => state.users
);

export const selectIsLoading = createSelector(
  selectUserFeature,
  (state) => !state.users
);

export const selectUserDetails = createSelector(
  selectUserFeature,
  (state) => state.userDetails
);

export const selectUserDetailsIsLoading = createSelector(
  selectUserFeature,
  (state) => !state.userDetails
);

export const selectGetUsersFailure = createSelector(
  selectUserFeature,
  (state) => state.error
);

export const setFilterQuery = createSelector(
  selectUserFeature,
  (state) => state.query
);

export const selectUsersByQuery = createSelector(
  selectUsers,
  setFilterQuery,
  (users, query) => {
    // Filter Array
    if (query === '') return users;
    return users.filter((item) =>
      item.name.toLowerCase().includes(query?.toLowerCase() as string)
    );
  }
);
