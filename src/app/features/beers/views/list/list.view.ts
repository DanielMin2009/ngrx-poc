import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BeerService } from '../../beers.service';
import { Beer } from '../../models/beer';

@Component({
  selector: 'lab-list-view',
  templateUrl: './list.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListView {
  @HostBinding('class') className = 'lab-view lab-view__list';

  beers: Observable<Beer[]> = of([]);

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beers = this.beerService.getBeers();
  }

  getBeerById(index: number, beer: Beer): number {
    return beer.id;
  }
}
