import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

// Shared
import { LayoutTypeClass } from 'src/app/shared/utils/utils';
@Component({
  selector: 'lab-detail-view',
  templateUrl: './detail.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailView {
  @HostBinding('class') className = LayoutTypeClass.BeersMainVerticallyTop;
}
