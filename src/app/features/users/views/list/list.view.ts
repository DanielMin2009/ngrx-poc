import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

// Shared
import { LayoutTypeClass } from '../../../../shared/definitions/styles';
import { INFINITE_SCROLL } from '../../../../shared/definitions/units';

// Feature Users
import { UsersFacade } from '../../users.facade';
import { User } from '../../models/user';
@Component({
  selector: 'lab-list-view',
  templateUrl: './list.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListView implements OnInit, OnDestroy {
  @HostBinding('class') className = LayoutTypeClass.UsersMainVerticallyTop;

  page = INFINITE_SCROLL.page;
  limit = INFINITE_SCROLL.limit;
  throttle = INFINITE_SCROLL.throttle;
  scrollDistance = INFINITE_SCROLL.scrollDistance;

  constructor(public usersFacade: UsersFacade, private router: Router) {}

  ngOnInit(): void {
    this.usersFacade.getUsers({ page: this.page, limit: this.limit });
    this.onErrorSuscription();
  }

  ngOnDestroy(): void {
    this.usersFacade.resetQuery();
  }

  getUserById(index: number, user: User): number {
    return user.id;
  }

  onSendEmail(userId: number): void {
    window.location.href = `mailto:danipanies@gmail.com?subject=Estoy interesado en contar con sus servicios de consultoría&body=Soy usuario con UID: ${userId}`;
  }

  onScrollEnd() {
    this.page += 1;
    this.usersFacade.getUsers({ page: this.page, limit: this.limit });
  }

  filter(query: string): void {
    this.usersFacade.getUsersByName(query);
  }

  onErrorSuscription(): void {
    this.usersFacade.error$.subscribe((error) => {
      // TODO: Here we should show an error with a kind of toast
      alert(error);
    });
  }
}
