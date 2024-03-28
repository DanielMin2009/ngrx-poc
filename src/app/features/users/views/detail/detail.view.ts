import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Shared
import { LayoutTypeClass } from 'src/app/shared/definitions/styles';

// Feature Users
import { UsersFacade } from '../../users.facade';
@Component({
  selector: 'lab-detail-view',
  templateUrl: './detail.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailView {
  @HostBinding('class') className = LayoutTypeClass.UsersMainVerticallyCentered;

  constructor(public usersFacade: UsersFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersFacade.getUserById(id);
  }
}
