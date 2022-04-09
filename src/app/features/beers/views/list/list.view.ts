import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';

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

  throttle = 300;
  scrollDistance = 0.2;
  limit = 12;
  page = 1;

  constructor(public beersFacade: BeersFacade, private router: Router) {}

  ngOnInit(): void {
    this.beersFacade.getBeers({ page: this.page, limit: this.limit });
    this.beersFacade.error$
      .pipe(take(1))
      .subscribe((error) => console.log('has error?', error));
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
