import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'lab-detail-view',
  templateUrl: './detail.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailView {
  @HostBinding('class') className = 'lab-view lab-view__detail';
}
