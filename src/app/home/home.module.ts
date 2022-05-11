import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { ItemDetailModule } from '../item-detail/item-detail.module';
import { ComponentsModule } from '../components/components.module';
import { NetworkService } from '../services/network/network.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ItemDetailModule,
    ComponentsModule
  ],
  declarations: [HomePage],
  providers: [NetworkService]
})
export class HomePageModule {}
