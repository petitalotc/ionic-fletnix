import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IApiParameters } from './models/IApiParameters';
import { IItemsResponse } from './models/IItem';
import { IItemDetail } from './models/IItemDetail';
import { IProvidersResponse } from './models/IProvider';
import { IVideosResponse } from './models/IVideo';

export class TMDBApiClient {

    // Doc : https://developers.themoviedb.org/3/getting-started/introduction
    private readonly C_TMDB_API_PATH: string = "https://api.themoviedb.org/3";

    constructor(
		private moHttpClient: HttpClient,
	) { }

    public getMovie(pnMovieId: number): Observable<IItemDetail> {
        let lsUrl = this.getMoviePath(pnMovieId);

        return this.moHttpClient.get<IItemDetail>(lsUrl);
    }
  
    public getSerie(pnSerieId: number): Observable<IItemDetail> {
        let lsUrl = this.getSeriePath(pnSerieId);

        return this.moHttpClient.get<IItemDetail>(lsUrl);
    }

    public getMovies(poParameters?: IApiParameters): Observable<IItemsResponse> {
        let lsUrl: string = this.buildPath("/discover/movie", poParameters);

        return this.moHttpClient.get<IItemsResponse>(lsUrl);
    }

    public getSeries(poParameters?: IApiParameters): Observable<IItemsResponse> {
        let lsUrl: string = this.buildPath("/discover/tv", poParameters);

        return this.moHttpClient.get<IItemsResponse>(lsUrl);
    }

    public getTrendingMovies(poParameters?: IApiParameters): Observable<IItemsResponse> {
        let lsUrl: string = this.buildPath("/trending/movie/week", poParameters);

        return this.moHttpClient.get<IItemsResponse>(lsUrl);
    }

    public getTrendingSeries(poParameters?: IApiParameters): Observable<IItemsResponse> {
        let lsUrl: string = this.buildPath("/trending/tv/week", poParameters);

        return this.moHttpClient.get<IItemsResponse>(lsUrl);
    }

    public getBestTrending(poParameters?: IApiParameters): Observable<IItemsResponse> {
        let lsUrl: string = this.buildPath("/trending/all/day", poParameters);

        return this.moHttpClient.get<IItemsResponse>(lsUrl);
    }

    public getMovieProviders(pnItemId: number): Observable<IProvidersResponse> {
        let lsUrl: string = `${this.getMoviePath(pnItemId, "/watch/providers")}`;

        return this.moHttpClient.get<IProvidersResponse>(lsUrl);
    }

    public getSerieProviders(pnItemId: number): Observable<IProvidersResponse> {
        let lsUrl: string = `${this.getSeriePath(pnItemId, "/watch/providers")}`;

        return this.moHttpClient.get<IProvidersResponse>(lsUrl);
    }

    public getMovieYoutubeVideos(pnItemId): Observable<IVideosResponse> {
        let lsUrl: string = `${this.getMoviePath(pnItemId, "/videos")}`;

        return this.moHttpClient.get<IVideosResponse>(lsUrl);
    }

    public getSerieYoutubeVideos(pnItemId): Observable<IVideosResponse> {
        let lsUrl: string = `${this.getSeriePath(pnItemId, "/videos")}`;

        return this.moHttpClient.get<IVideosResponse>(lsUrl);
    }

    public search(psQuery: string): Observable<IItemsResponse> {
        let lsUrl: string = this.buildPath("/search/multi", { query: psQuery });

        return this.moHttpClient.get<IItemsResponse>(lsUrl);
    }

    private getMoviePath(pnMovieId: number, psLinkExtra?: string): string {
        return this.buildPath(`/movie/${pnMovieId}${psLinkExtra? psLinkExtra : ''}`);
    }

    private getSeriePath(pnSerieId: number, psLinkExtra?: string): string {
        return this.buildPath(`/tv/${pnSerieId}${psLinkExtra? psLinkExtra : ''}`);
    }

    private buildPath(psUrl: string, poParameters?: IApiParameters): string {
        let lsUrl: string = `${this.C_TMDB_API_PATH}${this.addDefaultParams(psUrl)}`;
        if (poParameters) {
            for (const [key, value] of Object.entries(poParameters)) {
                lsUrl = this.addRequestParam(lsUrl, key, value);
            };
        };

        return lsUrl;
    }

    private addDefaultParams(psUrl: string): string {
        return psUrl + `?api_key=${environment.TMDB_API_KEY}&language=fr-FR&watch_region=FR`;
    }

    private addRequestParam(psUrl: string, psParamName: string, poParamValue?: any): string {
		if (poParamValue !== undefined && poParamValue !== null)
			psUrl = `${psUrl}${psUrl.includes("?") ? "&" : "?"}${psParamName}=${poParamValue}`;
		return psUrl;
	}
}