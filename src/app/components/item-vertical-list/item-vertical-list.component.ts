import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from 'src/app/services/tmdb/models/IItem';
import { TMDBService } from '../../services/tmdb/tmdb.service';

@Component({
  selector: 'app-item-vertical-list',
  templateUrl: './item-vertical-list.component.html',
  styleUrls: ['./item-vertical-list.component.scss'],
})
export class ItemVerticalListComponent implements OnInit {

  @Input() public title: string;
  @Input() public items: IItem[];

  constructor(
    private isvcTMDB: TMDBService,
    private ioRouter: Router
  ) { }

  ngOnInit() { }

  public async goToDetail(poItem: IItem): Promise<void> {
    if (this.isvcTMDB.getMediaType(poItem) === "movie")
      this.ioRouter.navigate([this.ioRouter.url, 'movie', poItem.id]);
    else
      this.ioRouter.navigate([this.ioRouter.url, 'tv', poItem.id]);
  }
}
