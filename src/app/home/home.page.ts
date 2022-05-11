import { Component, OnInit } from '@angular/core';
import { switchMap, take, tap } from 'rxjs/operators';
import { EBackdropSizes } from '../services/tmdb/models/EBackdropSizes';
import { EPosterSizes } from '../services/tmdb/models/EPosterSizes';
import { IItem, IItemsResponse } from '../services/tmdb/models/IItem';
import { TMDBService } from '../services/tmdb/tmdb.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { IItemDetail } from '../services/tmdb/models/IItemDetail';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public spotlightItem: IItemDetail;
  public popularMovies: IItem[];
  public popularSeries: IItem[];
  public trendingMovies: IItem[];
  public trendingSeries: IItem[];

  constructor(
    private isvcTMDB: TMDBService,
    private isvcAuth: AuthService,
    private ioRouter: Router
  ) { }

  ngOnInit() {
    this.isvcTMDB.getMovies({ sort_by: "popularity.desc", page: 1 }).pipe(
      tap((poResponse: IItemsResponse) => {
        poResponse.results.forEach((poMovie: IItem) => {
          this.isvcTMDB.addImagePathToItem(poMovie, EBackdropSizes['1280px'], EPosterSizes['185px']);
        });
        this.popularMovies = poResponse.results;
      }),
      switchMap(() => this.isvcTMDB.getSeries({ sort_by: "popularity.desc", page: 1 })),
      tap((poResponse: IItemsResponse) => {
        poResponse.results.forEach((poSerie: IItem) => {
          this.isvcTMDB.addImagePathToItem(poSerie, EBackdropSizes['1280px'], EPosterSizes['185px']);
        });
        this.popularSeries = poResponse.results;
      }),
      switchMap(() => this.isvcTMDB.getTrendingMovies({ page: 1 })),
      tap((poResponse: IItemsResponse) => {
        poResponse.results.forEach((poMovie: IItem) => {
          this.isvcTMDB.addImagePathToItem(poMovie, EBackdropSizes['1280px'], EPosterSizes['185px']);
        });
        this.trendingMovies = poResponse.results;
      }),
      switchMap(() => this.isvcTMDB.getTrendingSeries({ page: 1 })),
      tap((poResponse: IItemsResponse) => {
        poResponse.results.forEach((poSerie: IItem) => {
          this.isvcTMDB.addImagePathToItem(poSerie, EBackdropSizes['1280px'], EPosterSizes['185px']);
        });
        this.trendingSeries = poResponse.results;
      }),
      switchMap(() => this.isvcTMDB.getBestTrending({ page: 1 })),
      tap((poResponse: IItemsResponse) => {
        poResponse.results.forEach((poItem: IItem) => {
          this.isvcTMDB.addImagePathToItem(poItem, EBackdropSizes.original, EPosterSizes['185px']);
        });
        const randomInt: number = Math.floor(Math.random() * 20);
        this.spotlightItem = poResponse.results[randomInt] as IItemDetail;
      })
    ).subscribe();
  }

  public async goToProfil(): Promise<void> {
    this.isvcAuth.user
      .pipe(
        take(1),
        tap((poUser: firebase.default.User) => {
          if (poUser)
            this.ioRouter.navigateByUrl("/profil");
          else 
            this.isvcAuth.showAuthModal();
        })
      ).subscribe();
  }

}
