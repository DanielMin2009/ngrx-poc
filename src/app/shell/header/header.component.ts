import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BeersFacade } from 'src/app/features/beers/beers.facade';

@Component({
  selector: 'lab-shell-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderShellComponent implements OnInit, OnDestroy {
  @HostBinding('class') className = 'lab-shell__header';

  querySubscription: Subscription | undefined;
  form: FormGroup = this.formBuilder.group({
    query: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    public beersFacade: BeersFacade
  ) {}

  ngOnInit(): void {
    this.querySubscription = this.form
      .get('query')
      ?.valueChanges.subscribe((query) => {
        this.beersFacade.setFilteredBeersByName(query);
      });
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }
}
