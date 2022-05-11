import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { take, tap, mergeMap } from 'rxjs/operators';
import { IItem } from '../tmdb/models/IItem';
import { IItemDetail } from '../tmdb/models/IItemDetail';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public userData: {
    $favorites: BehaviorSubject<IItemDetail[]>,
    $watch_list: BehaviorSubject<IItemDetail[]>
  } = {
    $favorites: new BehaviorSubject(null),
    $watch_list: new BehaviorSubject(null)
  };

  public favorites: IItemDetail[];
  public watch_list: IItemDetail[];

  constructor(
    private isvcFirestore: AngularFirestore
  ) { }

  public setUserDocListener(psUserId: string) {
    this.isvcFirestore.collection('Users').doc(`usr_${psUserId}`).collection('Favorites').valueChanges()
      .pipe(
        tap((paFavorites: any) => {
          this.userData.$favorites.next(paFavorites);
          this.favorites = paFavorites;
        }),
        mergeMap(_ => this.isvcFirestore.collection('Users').doc(`usr_${psUserId}`).collection('WatchList').valueChanges()),
        tap((paWatchList: any) => {
          this.userData.$watch_list.next(paWatchList);
          this.watch_list = paWatchList;
        })
      ).subscribe();
  }

  public emptyData(): void {
    this.userData.$favorites.next(null);
    this.favorites = [];
    this.userData.$watch_list.next(null);
    this.watch_list = [];
  }

  public async toggleAddItemToFavorites(psUserId: string, poItem: IItemDetail): Promise<void> {
    this.userData.$favorites
      .pipe(
        take(1),
        tap(async (paUserFavorites) => {
          if (!paUserFavorites?.find((poUserItem: IItemDetail) => poUserItem.id === poItem.id)) {
            await this.isvcFirestore.collection('Users').doc(`usr_${psUserId}`).collection('Favorites').doc(`item_${poItem.id}`).set(poItem);
          }
          else {
            await this.isvcFirestore.collection('Users').doc(`usr_${psUserId}`).collection('Favorites').doc(`item_${poItem.id}`).delete();
          };
        })
      ).subscribe();
  }

  public async toggleAddToWatchList(psUserId: string, poItem: IItemDetail): Promise<void> {
    this.userData.$watch_list
      .pipe(
        take(1),
        tap(async (paUserWatchList) => {
          if (!paUserWatchList?.find((poUserItem: IItemDetail) => poUserItem.id === poItem.id)) {
            await this.isvcFirestore.collection('Users').doc(`usr_${psUserId}`).collection('WatchList').doc(`item_${poItem.id}`).set(poItem);
          }
          else {
            await this.isvcFirestore.collection('Users').doc(`usr_${psUserId}`).collection('WatchList').doc(`item_${poItem.id}`).delete();
          };
        })
      ).subscribe();
  }

  public isFavorite(poItem: IItem) {
    let lbRes: boolean = false;
    if (this.favorites?.find((poUserItem: IItemDetail) => poUserItem.id === poItem.id))
      lbRes = true;

    return lbRes;
  }

  public isInWatchList(poItem: IItem) {
    let lbRes: boolean = false;
    if (this.watch_list?.find((poUserItem: IItemDetail) => poUserItem.id === poItem.id))
      lbRes = true;

    return lbRes;
  }
}
