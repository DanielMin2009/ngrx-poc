import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views
import { DetailView } from './features/users/views/detail/detail.view';
import { ListView } from './features/users/views/list/list.view';

const ROUTES: Routes = [
  { path: 'users', component: ListView, data: { menuItem: 1 } },
  { path: 'users/:id', component: DetailView, data: { menuItem: 2 } },

  { path: '**', pathMatch: 'full', redirectTo: 'users' },
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
