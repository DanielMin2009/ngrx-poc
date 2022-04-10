import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

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
export class ListView {
  @HostBinding('class') className = LayoutTypeClass.BeersMainVerticallyCentered;

  page = 1;
  limit = 12;
  throttle = 300;
  scrollDistance = 0.2;

  constructor(public beersFacade: BeersFacade, private router: Router) {}

  ngOnInit(): void {
    this.beersFacade.getBeers({ page: this.page, limit: this.limit });
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
