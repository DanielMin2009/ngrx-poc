import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Views
import { DetailView } from './views/detail/detail.view';
import { ListView } from './views/list/list.view';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
];
@NgModule({
  imports: [
    CommonModule,
    // Material
    ...materialModules,
  ],
  exports: [],
  declarations: [DetailView, ListView],
  providers: [],
})
export class BeersModule {}
