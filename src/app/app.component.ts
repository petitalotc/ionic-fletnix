import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth/auth.service';
import { NetworkService } from './services/network/network.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private isvcAuth: AuthService,
    private isvcNetwork: NetworkService,
    private isvcFirestore: AngularFirestore
  ) {
    this.init();
  }

  private async init(): Promise<void> {
    this.isvcAuth.setAuthListener();
    this.isvcNetwork.setNetworkStatusListener();
    await this.isvcFirestore.firestore.enablePersistence();
  }

}
