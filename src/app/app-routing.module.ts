import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views
import { DetailView } from './features/beers/views/detail/detail.view';
import { ListView } from './features/beers/views/list/list.view';

const ROUTES: Routes = [
  { path: 'beers', component: ListView, data: { menuItem: 1 } },
  { path: 'beers/:id', component: DetailView, data: { menuItem: 2 } },

  { path: '**', pathMatch: 'full', redirectTo: 'beers' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
