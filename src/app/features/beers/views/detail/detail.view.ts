import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Shared
import { LayoutTypeClass } from 'src/app/shared/utils/utils';

// Feature Beers
import { BeersFacade } from '../../beers.facade';
@Component({
  selector: 'lab-detail-view',
  templateUrl: './detail.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailView {
  @HostBinding('class') className = LayoutTypeClass.BeersMainVerticallyTop;

  constructor(public beersFacade: BeersFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.beersFacade.getBeerById(id);
  }
}
