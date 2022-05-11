export class IProvidersResponse {
    id: number;
    results: {
        FR: {
            flatrate: IProvider[];
        };
    };
}

export class IProvider {
    logo_path: string;
    provider_id: string;
    provider_name: string;
}