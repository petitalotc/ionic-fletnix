import { IItem } from './IItem';
import { IProvider } from './IProvider';
import { IVideo } from './IVideo';
export class IItemDetail extends IItem {
    genres: [{ id: number, name: string }];
    runtime: number;
    providers: IProvider[];
    videos: IVideo[];
}