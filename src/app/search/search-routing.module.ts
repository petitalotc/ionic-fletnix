import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
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
export class SearchPageRoutingModule {}
