import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Views
import { DetailView } from './views/detail/detail.view';
import { ListView } from './views/list/list.view';

// Sources
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { specialChars } from 'src/app/shared/pipes/special-chars.pipe';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
];
@NgModule({
  imports: [
    CommonModule,
    // Components
    CardModule,
    // Material
    ...materialModules,
    InfiniteScrollModule,
  ],
  exports: [],
  declarations: [DetailView, ListView, specialChars],
  providers: [],
})
export class BeersModule {}
