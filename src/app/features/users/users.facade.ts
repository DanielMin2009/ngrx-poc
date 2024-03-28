import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// RxJS
import { filter, Observable } from 'rxjs';

// Definitions
import { User } from './models/user';
import { UserDetails } from './models/userDetails';

// Store
import * as fromActions from './store/user.actions';
import * as fromSelectors from './store/user.selectors';
@Injectable({ providedIn: 'root' })
export class UsersFacade {
  isLoading$: Observable<boolean> = this.store.select(
    fromSelectors.selectIsLoading
  );

  getUserDetails$: Observable<UserDetails | null | undefined> =
    this.store.select(fromSelectors.selectUserDetails);

  getUsersByName$: Observable<User[]> = this.store.select(
    fromSelectors.selectUsersByQuery
  );

  error$: Observable<string | null> = this.store
    .select(fromSelectors.selectGetUsersFailure)
    .pipe(
      filter((error) => {
        return !!error;
      })
    );

  constructor(private store: Store) {}

  getUsers(filter: { page: number; limit: number }): void {
    this.store.dispatch(fromActions.getUsers({ filter }));
  }

  getUserById(userId: number): void {
    this.store.dispatch(fromActions.getUserById({ userId }));
  }

  getUsersByName(query: string): void {
    this.store.dispatch(fromActions.setFilterQuery({ query }));
  }

  resetQuery(): void {
    this.store.dispatch(fromActions.resetQuery());
  }
}
