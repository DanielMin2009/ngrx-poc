import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Sources
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Views
import { DetailView } from './views/detail/detail.view';
import { ListView } from './views/list/list.view';

// Shared
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchbarModule } from '../../shared/components/searchbar/searchbar.module';
import { SpecialChars } from 'src/app/shared/pipes/special-chars.pipe';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
];
@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    // Shared
    CardModule,
    SearchbarModule,
    // Material
    ...materialModules,
  ],
  exports: [],
  declarations: [DetailView, ListView, SpecialChars],
  providers: [],
})
export class BeersModule {}
