import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BeersFacade } from 'src/app/features/beers/beers.facade';

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

  constructor(
    public beersFacade: BeersFacade,
    private formBuilder: FormBuilder
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
