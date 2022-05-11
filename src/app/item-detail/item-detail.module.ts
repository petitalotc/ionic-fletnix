import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemDetailPageRoutingModule } from './item-detail-routing.module';
import { ItemComponent } from './item/item.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { ItemPreviewModalComponent } from './item-preview-modal/item-preview-modal.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ItemComponent, ItemPreviewComponent, ItemPreviewModalComponent]
})
export class ItemDetailModule {}
