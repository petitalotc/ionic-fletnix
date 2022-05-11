import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WatchListPageRoutingModule } from './watch-list-routing.module';
import { WatchListPage } from './watch-list.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WatchListPage]
})
export class WatchListPageModule {}
