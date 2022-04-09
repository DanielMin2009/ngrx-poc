import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

// Shared
import { LayoutTypeClass } from 'src/app/shared/utils/utils';

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

  constructor(public beersFacade: BeersFacade, private router: Router) {}

  ngOnInit(): void {
    this.beersFacade.getBeers();
  }

  getBeerById(index: number, beer: Beer): number {
    return beer.id;
  }
}
