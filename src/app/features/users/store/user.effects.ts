import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// RxJS
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

// Actions
import * as fromActions from './user.actions';

// Service
import { UserService } from '../users.service';
@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fromActions.getUsers),
      exhaustMap((action) =>
        this.userService.getUsers(action.filter).pipe(
          map((users) => {
            return fromActions.getUsersSucess({ users });
          }),
          catchError((error) => {
            return of(
              fromActions.getUsersFailure({
                error: 'Ooops... Something went wrong',
              })
            );
          })
        )
      )
    );
  });

  loadUserById$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fromActions.getUserById),
      exhaustMap((action) =>
        this.userService.getUserById(action.userId).pipe(
          map((userDetails) => {
            return fromActions.getUserDetailsSucess({
              userDetails: userDetails[0],
            });
          }),
          catchError((error) => {
            return of(fromActions.getUserDetailsFailure({ error }));
          })
        )
      )
    );
  });

  constructor(private action$: Actions, private userService: UserService) {}
}
