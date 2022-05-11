import { Component, Input, OnInit } from '@angular/core';
import { IItemDetail } from '../../services/tmdb/models/IItemDetail';
import { IProvider } from '../../services/tmdb/models/IProvider';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})
export class ItemPreviewComponent implements OnInit {

  @Input() public itemDetail: IItemDetail;
  @Input() public isModal: boolean;
  @Input() public showInfos: boolean;

  constructor() { }

  ngOnInit() { }

  public getHoursAndMinutes(pnRuntime: number): string {
    const lnHours: number = (pnRuntime / 60);
    const lnResHours: number = Math.floor(lnHours);
    const lnMinutes: number = (lnHours - lnResHours) * 60;
    const lnResMinutes: number = Math.round(lnMinutes);
    
    return lnHours > 0 ? `${lnResHours}h${lnResMinutes}m` : `${lnResMinutes}m`;
  }

}
