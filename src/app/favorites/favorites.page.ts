import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from '../services/data/data.service';
import { IItemDetail } from '../services/tmdb/models/IItemDetail';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  public items: IItemDetail[];

  constructor(
    private isvcData: DataService
  ) { }

  async ngOnInit() {
    this.isvcData.userData.$favorites.pipe(
      tap((poUserData) => this.items = poUserData)
    ).subscribe();
  }

}
