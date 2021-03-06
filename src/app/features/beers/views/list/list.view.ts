import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

// Shared
import { LayoutTypeClass } from '../../../../shared/definitions/styles';
import { INFINITE_SCROLL } from '../../../../shared/definitions/units';

// Feature Beers
import { BeersFacade } from '../../beers.facade';
import { Beer } from '../../models/beer';
@Component({
  selector: 'lab-list-view',
  templateUrl: './list.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListView implements OnInit, OnDestroy {
  @HostBinding('class') className = LayoutTypeClass.BeersMainVerticallyTop;

  page = INFINITE_SCROLL.page;
  limit = INFINITE_SCROLL.limit;
  throttle = INFINITE_SCROLL.throttle;
  scrollDistance = INFINITE_SCROLL.scrollDistance;

  constructor(public beersFacade: BeersFacade, private router: Router) {}

  ngOnInit(): void {
    this.beersFacade.getBeers({ page: this.page, limit: this.limit });
    this.onErrorSuscription();
  }

  ngOnDestroy(): void {
    this.beersFacade.resetQuery();
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

  filter(query: string): void {
    this.beersFacade.getBeersByName(query);
  }

  onErrorSuscription(): void {
    this.beersFacade.error$.subscribe((error) => {
      // TODO: Here we should show an error with a kind of toast
      alert(error);
    });
  }
}
