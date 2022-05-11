import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TMDBService } from '../../services/tmdb/tmdb.service';
import { mergeMap, tap } from 'rxjs/operators';
import { IItemDetail } from '../../services/tmdb/models/IItemDetail';
import { IProvidersResponse, IProvider } from '../../services/tmdb/models/IProvider';
import { Observable } from 'rxjs';
import { EBackdropSizes } from '../../services/tmdb/models/EBackdropSizes';
import { IVideo, IVideosResponse } from 'src/app/services/tmdb/models/IVideo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  public itemDetail: IItemDetail;

  constructor(
    private ioRouter: Router,
    private ioRoute: ActivatedRoute,
    private isvcTMDB: TMDBService
  ) { }

  ngOnInit() {
    const lnItemId: number = +this.ioRoute.snapshot.params.id;

    if (this.ioRouter.url.includes("movie")) {
      this.isvcTMDB.getMovie(lnItemId)
        .pipe(
          tap((poMovie: IItemDetail) => {
            this.isvcTMDB.addImagePathToItem(poMovie, EBackdropSizes['1280px']);
            this.itemDetail = poMovie;
          }),
          mergeMap(_ => this.getData(this.itemDetail))
        ).subscribe();
    }
    else {
      this.isvcTMDB.getSerie(lnItemId)
        .pipe(
          tap((poSerie: IItemDetail) => {
            this.isvcTMDB.addImagePathToItem(poSerie, EBackdropSizes['1280px']);
            this.itemDetail = poSerie;
          }),
          mergeMap(_ => this.getData(this.itemDetail))
        ).subscribe();
    }
  }

  private getData(poItem: IItemDetail): Observable<any> {
    return this.isvcTMDB.getWatchProviders(poItem)
      .pipe(
        tap((poProvidersResponse: IProvidersResponse) => {
          poProvidersResponse.results.FR?.flatrate?.forEach((poProvider: IProvider) => this.isvcTMDB.addImagePathToItem(poProvider));
          if (poProvidersResponse.results.FR?.flatrate)
            this.itemDetail.providers = poProvidersResponse.results.FR?.flatrate;
        }),
        mergeMap(_ => this.isvcTMDB.getItemYoutubeVideos(this.itemDetail)),
        tap((poVideosResponse: IVideosResponse) => {
          if (poVideosResponse.results)
            this.itemDetail.videos = poVideosResponse.results.filter((poVideo: IVideo) => poVideo.site === "YouTube");
        })
      );
  }

}
