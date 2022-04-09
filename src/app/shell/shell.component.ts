import {
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// RxJS
import { fromEvent, Observer } from 'rxjs';

// Shared
import { ROUTE_SLIDE_STATE_TRIGGER } from '../shared/animations/route-animations';

@Component({
  selector: 'lab-shell',
  templateUrl: './shell.component.html',
  animations: [ROUTE_SLIDE_STATE_TRIGGER],
})
export class ShellComponent implements OnInit {
  @HostBinding('class') className = 'lab-shell lab-shell__wrapper';
  @ViewChild('shell', { static: true })
  shellRef!: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    const wheelMovement$ = fromEvent(
      this.shellRef.nativeElement,
      'wheel'
    ).subscribe((e: Observer<WheelEvent> | any) => {
      // object property
      const movement = e['wheelDeltaY'] > 0 ? 'UP' : 'DOWN';
      console.log(`movement: ${movement}`);
    });

    const touchMove$ = fromEvent(
      this.shellRef.nativeElement,
      'touchMove'
    ).subscribe((e: any) => {
      const movement = e['touchDeltaY'] > 0 ? 'UP' : 'DOWN';
      console.log(`movement: ${movement}`);
    });
  }

  goToView(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const menuItem = outlet.activatedRouteData['menuItem'];
      if (!menuItem) return 'secondary';
      return menuItem;
    }
  }
}
