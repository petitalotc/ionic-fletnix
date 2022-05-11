import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemHorizontalListComponent } from './item-horizontal-list/item-horizontal-list.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { YoutubeIframeComponent } from './youtube-iframe/youtube-iframe.component';
import { ItemVerticalListComponent } from './item-vertical-list/item-vertical-list.component';
import { NoResultComponent } from './no-result/no-result.component';
import { CloseModalButtonComponent } from './close-modal-button/close-modal-button.component';

const components = [
  ItemHorizontalListComponent,
  SpotlightComponent,
  BackButtonComponent,
  YoutubeIframeComponent,
  ItemVerticalListComponent,
  NoResultComponent,
  CloseModalButtonComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: components,
  exports: components
})
export class ComponentsModule {}
