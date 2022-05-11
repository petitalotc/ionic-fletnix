import { Injectable } from '@angular/core';
import { TMDBApiClient } from './tmdbApiClient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiParameters } from './models/IApiParameters';
import { IItem, IItemsResponse } from './models/IItem';
import { EBackdropSizes } from './models/EBackdropSizes';
import { EPosterSizes } from './models/EPosterSizes';
import { IItemDetail } from './models/IItemDetail';
import { IProvidersResponse } from './models/IProvider';
import { IVideosResponse } from './models/IVideo';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {

  private moTMDBApiClient: TMDBApiClient;

  public static imagePath: string = "https://image.tmdb.org/t/p";

  constructor(
    private ioHttpClient: HttpClient
  ) {
    this.moTMDBApiClient = new TMDBApiClient(this.ioHttpClient);
  }

  public getItemDetail(poItem: IItem): Observable<IItemDetail> {
    if (this.getMediaType(poItem) === "movie") {
      return this.moTMDBApiClient.getMovie(poItem.id);
    }
    else {
      return this.moTMDBApiClient.getSerie(poItem.id);
    }
  }

  public getMovie(pnMovieId: number): Observable<IItemDetail> {
    return this.moTMDBApiClient.getMovie(pnMovieId);
  }

  public getSerie(pnSerieId: number): Observable<IItemDetail> {
    return this.moTMDBApiClient.getSerie(pnSerieId);
  }

  public getMovies(poParameters?: IApiParameters): Observable<IItemsResponse> {
    return this.moTMDBApiClient.getMovies(poParameters);
  }

  public getSeries(poParameters?: IApiParameters): Observable<IItemsResponse> {
    return this.moTMDBApiClient.getSeries(poParameters);
  }

  public getTrendingMovies(poParameters?: IApiParameters): Observable<IItemsResponse> {
    return this.moTMDBApiClient.getTrendingMovies(poParameters);
  }

  public getTrendingSeries(poParameters?: IApiParameters): Observable<IItemsResponse> {
    return this.moTMDBApiClient.getTrendingSeries(poParameters);
  }

  public getBestTrending(poParameters?: IApiParameters): Observable<IItemsResponse> {
    return this.moTMDBApiClient.getBestTrending(poParameters);
  }

  public getWatchProviders(poItem: IItem): Observable<IProvidersResponse> {
    if (this.getMediaType(poItem) === "movie") {
      return this.moTMDBApiClient.getMovieProviders(poItem.id);
    }
    else {
      return this.moTMDBApiClient.getSerieProviders(poItem.id);
    }
  }

  public getItemYoutubeVideos(poItem: IItem): Observable<IVideosResponse>  {
    if (this.getMediaType(poItem) === "movie") {
      return this.moTMDBApiClient.getMovieYoutubeVideos(poItem.id);
    }
    else {
      return this.moTMDBApiClient.getSerieYoutubeVideos(poItem.id);
    }
  }

  public search(psQuery: string): Observable<IItemsResponse> {
    return this.moTMDBApiClient.search(psQuery)
      .pipe(
        tap((poItemsResponse: IItemsResponse) => poItemsResponse.results.filter((poItem: IItem) => poItem.media_type === "movie" || poItem.media_type === "tv"))
      );
}

  public addImagePathToItem(poItem: any, psBackdropSize?: EBackdropSizes, psPosterSize?: EPosterSizes): IItem {
    if (poItem.backdrop_path)
      poItem.backdrop_path = `${TMDBService.imagePath}${psBackdropSize? `/${psBackdropSize}` : `/${EBackdropSizes.original}`}${poItem.backdrop_path}`;
    if (poItem.poster_path)
      poItem.poster_path = `${TMDBService.imagePath}${psPosterSize? `/${psPosterSize}` : `/${EPosterSizes.original}`}${poItem.poster_path}`;
    if (poItem.logo_path)
      poItem.logo_path = `${TMDBService.imagePath}/${EPosterSizes.original}${poItem.logo_path}`

    return poItem;
  }

  public getMediaType(poItem: IItem): string {
    if (poItem.title)
      return "movie";
    else
      return "tv";
  }
}
