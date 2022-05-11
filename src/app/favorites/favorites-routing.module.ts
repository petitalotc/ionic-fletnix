import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesPage } from './favorites.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPage
  },
  {
    path: 'movie/:id',
    loadChildren: () => import('../item-detail/item-detail.module').then( m => m.ItemDetailModule)
  },
  {
    path: 'tv/:id',
    loadChildren: () => import('../item-detail/item-detail.module').then( m => m.ItemDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesPageRoutingModule {}
