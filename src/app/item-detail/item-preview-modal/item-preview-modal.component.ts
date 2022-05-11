import { Component, Input, OnInit } from '@angular/core';
import { IItemDetail } from '../../services/tmdb/models/IItemDetail';
import { TMDBService } from '../../services/tmdb/tmdb.service';
import { mergeMap, tap } from 'rxjs/operators';
import { IProvidersResponse, IProvider } from '../../services/tmdb/models/IProvider';
import { EBackdropSizes } from '../../services/tmdb/models/EBackdropSizes';
import { IItem } from '../../services/tmdb/models/IItem';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-preview-detail-modal',
  templateUrl: './item-preview-modal.component.html',
  styleUrls: ['./item-preview-modal.component.scss'],
})
export class ItemPreviewModalComponent implements OnInit {

  @Input() public item: IItem;
  public itemDetail: IItemDetail;

  constructor(
    private ioModalCtrl: ModalController,
    private isvcTMDB: TMDBService
  ) { }

  ngOnInit() {
    this.isvcTMDB.getItemDetail(this.item)
      .pipe(
        tap((poItemDetail: IItemDetail) => {
          this.isvcTMDB.addImagePathToItem(poItemDetail, EBackdropSizes['1280px']);
          this.itemDetail = poItemDetail;
        }),
        mergeMap((poItemDetail: IItemDetail) => this.isvcTMDB.getWatchProviders(poItemDetail)),
        tap((poProvidersResponse: IProvidersResponse) => {
          poProvidersResponse.results.FR?.flatrate?.forEach((poProvider: IProvider) => this.isvcTMDB.addImagePathToItem(poProvider));
          if (poProvidersResponse.results.FR?.flatrate)
            this.itemDetail.providers = poProvidersResponse.results.FR?.flatrate;
        })
      ).subscribe();
  }

  public closeModal(): void {
    this.ioModalCtrl.dismiss();
  }

}
