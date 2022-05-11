export class IVideosResponse {
    id: number;
    results: IVideo[];
}

export class IVideo {
    key: string;
    name: string;
    site: string;
    type: string;
}