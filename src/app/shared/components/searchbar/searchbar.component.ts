import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

// RxJS
import { Subscription } from 'rxjs';

@Component({
  selector: 'lab-searchbar',
  templateUrl: './searchbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent implements OnInit, OnDestroy {
  @HostBinding('class') className = 'lab-component lab-searchbar';

  querySubscription: Subscription | undefined;
  form: FormGroup = this.formBuilder.group({
    query: [''],
  });

  @Output() search = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.querySubscription = this.form
      .get('query')
      ?.valueChanges.subscribe((query) => {
        this.search.emit(query);
      });
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }
}
