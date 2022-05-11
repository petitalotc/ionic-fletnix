export class IItemsResponse {
    page: number;
    results: IItem[];
    total_pages: number;
    total_results: number;
}

export class IItem {
    id: number;
    /** `movie` ou `tv` */
    media_type: string;
    backdrop_path: string;
    genre_ids: number[];
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    /** Seulement pour les films */
    release_date?: string;
    /** Seulement pour les films */
    title?: string;
    /** Seulement pour les séries */
    first_air_date?: string;
    /** Seulement pour les séries */
    name?: string;
}