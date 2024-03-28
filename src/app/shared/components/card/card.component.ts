import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'lab-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @HostBinding('class') className = 'lab-component lab-card';

  @Input() title: string | undefined;
  @Input() pathImg: string | undefined;
  @Input() label: string | undefined;
  @Input() phone: string | undefined;
  @Input() email: string | undefined;
}
