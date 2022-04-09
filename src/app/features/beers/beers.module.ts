import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Views
import { DetailView } from './views/detail/detail.view';
import { ListView } from './views/list/list.view';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [DetailView, ListView],
  providers: [],
})
export class BeersModule {}
