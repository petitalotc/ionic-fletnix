import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TMDBService } from '../../services/tmdb/tmdb.service';
import { IItemDetail } from '../../services/tmdb/models/IItemDetail';
import { DataService } from '../../services/data/data.service';
import { AuthService } from '../../auth/auth.service';
import { tap } from 'rxjs/operators';
import { IItem } from 'src/app/services/tmdb/models/IItem';
import { Share } from '@capacitor/share';
import { environment } from '../../../environments/environment.prod';
import { HapticsService } from '../../services/haptics/haptics.service';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss'],
})
export class SpotlightComponent implements OnInit {

  @Input() public item: IItemDetail;
  @Input() public isModal: boolean;
  @Input() public showInfos: boolean;
  evv: NavigationExtras

  constructor(
    private isvcTMDB: TMDBService,
    private isvcData: DataService,
    private isvcAuth: AuthService,
    private isvcHaptics: HapticsService,
    private ioRouter: Router,
    private ioModalCtrl: ModalController
  ) { }

  ngOnInit() {}

  public async goToDetail(): Promise<void> {
    this.isvcHaptics.hapticsImpactMedium();

    if (this.isModal)
      await this.ioModalCtrl.dismiss();
      
    if (this.isvcTMDB.getMediaType(this.item) === "movie")
      this.ioRouter.navigate([this.ioRouter.url, 'movie', this.item.id]);
    else
      this.ioRouter.navigate([this.ioRouter.url, 'tv', this.item.id]);
  }

  public toggleAddToFavorites(poItem: IItemDetail): void {
    this.isvcHaptics.hapticsImpactMedium();

    this.isvcAuth.user
      .pipe(
        tap((poUser: firebase.default.User) => {
          if (poUser)
            this.isvcData.toggleAddItemToFavorites(poUser.uid, poItem);
          else {
            this.isvcAuth.showAuthModal();
          }
        })
      ).subscribe();
  }

  public toggleAddToWatchList(poItem: IItemDetail): void {
    this.isvcHaptics.hapticsImpactMedium();
    
    this.isvcAuth.user
      .pipe(
        tap((poUser: firebase.default.User) => {
          if (poUser)
            this.isvcData.toggleAddToWatchList(poUser.uid, poItem);
          else {
            this.isvcAuth.showAuthModal();
          }
        })
      ).subscribe();
  }

  public isFavorite(poItem: IItem): boolean {
    return this.isvcData.isFavorite(poItem);
  }

  public isInWatchList(poItem: IItem): boolean {
    return this.isvcData.isInWatchList(poItem);
  }

  public async share(poItem: IItem) {
    this.isvcHaptics.hapticsImpactMedium();

    await Share.share({
      title: poItem.title ? poItem.title : poItem.name,
      text: poItem.title ? poItem.title : poItem.name,
      url: `${environment.pwaUrl}home/${this.isvcTMDB.getMediaType(poItem)}/${poItem.id}`,
      dialogTitle: '',
    });
  }
}
