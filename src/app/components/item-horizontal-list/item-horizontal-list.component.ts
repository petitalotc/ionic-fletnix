import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IItem } from '../../services/tmdb/models/IItem';
import { ItemPreviewModalComponent } from '../../item-detail/item-preview-modal/item-preview-modal.component';

@Component({
  selector: 'app-item-horizontal-list',
  templateUrl: './item-horizontal-list.component.html',
  styleUrls: ['./item-horizontal-list.component.scss'],
})
export class ItemHorizontalListComponent implements OnInit {

  @Input() public title: string;
  @Input() public items: IItem[];
  public slidesOptions: any = {
    freeMode: true,
    breakpoints: {
      // when window width is >= 1px
      1: {
        slidesPerView: 3.2,
        spaceBetween: 8
      },
      // when window width is >= 320px
      425: {
        slidesPerView: 5.2,
        spaceBetween: 8
      },
      // when window width is >= 600px
      600: {
        slidesPerView: 7.2,
        spaceBetween: 8
      },
      // when window width is >= 800px
      800: {
        slidesPerView: 9.2,
        spaceBetween: 8
      }
    }
  };

  constructor(
    private ioModalCtrl: ModalController
  ) { }

  ngOnInit() {}

  public async showDetailModal(poItem: IItem): Promise<void> {
    const loDetailModal = await this.ioModalCtrl.create({
      component: ItemPreviewModalComponent,
      componentProps: {
        item: poItem
      }
    });
    loDetailModal.present();
  }

}
