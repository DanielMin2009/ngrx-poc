import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

// RxJS
import { Subscription } from 'rxjs';

// Shared
import { LayoutTypeClass } from 'src/app/shared/definitions/styles';

// Feature Beers
import { BeersFacade } from '../../beers.facade';
import { Beer } from '../../models/beer';
@Component({
  selector: 'lab-list-view',
  templateUrl: './list.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListView implements OnInit, OnDestroy {
  @HostBinding('class') className = LayoutTypeClass.BeersMainVerticallyCentered;

  page = 1;
  limit = 12;
  throttle = 300;
  scrollDistance = 0.2;

  querySubscription: Subscription | undefined;
  form: FormGroup = this.formBuilder.group({
    query: [''],
  });

  constructor(
    public beersFacade: BeersFacade,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.beersFacade.getBeers({ page: this.page, limit: this.limit });
    this.querySubscription = this.form
      .get('query')
      ?.valueChanges.subscribe((query) => {
        this.beersFacade.setFilteredBeersByName(query);
      });
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }

  getBeerById(index: number, beer: Beer): number {
    return beer.id;
  }

  goToDetails(beerId: number): void {
    this.router.navigateByUrl(`beers/${beerId}`);
  }

  onScrollEnd() {
    this.page += 1;
    this.beersFacade.getBeers({ page: this.page, limit: this.limit });
  }
}
