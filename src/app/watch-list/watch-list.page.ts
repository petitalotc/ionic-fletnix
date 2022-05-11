import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from '../services/data/data.service';
import { IItemDetail } from '../services/tmdb/models/IItemDetail';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.page.html',
  styleUrls: ['./watch-list.page.scss'],
})
export class WatchListPage implements OnInit {

  public items: IItemDetail[];

  constructor(
    private isvcData: DataService
  ) { }

  async ngOnInit() {
    this.isvcData.userData.$watch_list.pipe(
      tap((poUserData) => this.items = poUserData)
    ).subscribe();
  }

}
