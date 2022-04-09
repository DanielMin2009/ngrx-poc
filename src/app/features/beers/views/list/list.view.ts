import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'lab-list-view',
  templateUrl: './list.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListView {
  @HostBinding('class') className = 'lab-view lab-view__list';
}
