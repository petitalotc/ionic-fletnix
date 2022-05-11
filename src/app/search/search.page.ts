import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { ItemPreviewModalComponent } from '../item-detail/item-preview-modal/item-preview-modal.component';
import { EBackdropSizes } from '../services/tmdb/models/EBackdropSizes';
import { EPosterSizes } from '../services/tmdb/models/EPosterSizes';
import { IItem, IItemsResponse } from '../services/tmdb/models/IItem';
import { TMDBService } from '../services/tmdb/tmdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public items: IItem[];
  public defaultItems: IItem[];
  public listTitle: string;
  public searchTerm: string = "";

  constructor(
    private isvcTMDB: TMDBService
  ) { }

  ngOnInit() {
    this.isvcTMDB.getBestTrending()
      .pipe(
        tap((poResponse: IItemsResponse) => {
          poResponse.results.forEach((poMovie: IItem) => {
            this.isvcTMDB.addImagePathToItem(poMovie, EBackdropSizes['780px'], EPosterSizes['185px']);
          });
          this.defaultItems = poResponse.results;
          this.items = poResponse.results;
          this.listTitle = "Les plus recherchés";
        })
      ).subscribe();
  }

  searchItem(): void {
    if (this.searchTerm === "") {
      this.listTitle = "Les plus recherchés";
      this.items = this.defaultItems;
    }
    else {
      this.listTitle = "Résultats";
      this.isvcTMDB.search(this.searchTerm)
        .pipe(
          tap((poResponse: IItemsResponse) => {
            poResponse.results.forEach((poMovie: IItem) => {
              this.isvcTMDB.addImagePathToItem(poMovie, EBackdropSizes['780px'], EPosterSizes['185px']);
            });
            this.items = poResponse.results
          })
        ).subscribe();
    };
  }
  
}
