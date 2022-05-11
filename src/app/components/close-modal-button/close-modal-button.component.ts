import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-close-modal-button',
  templateUrl: './close-modal-button.component.html',
  styleUrls: ['./close-modal-button.component.scss'],
})
export class CloseModalButtonComponent implements OnInit {

  constructor(
    private ioModalCtrl: ModalController
  ) { }

  ngOnInit() {}

  public close(): void {
    this.ioModalCtrl.dismiss();
  }

}
