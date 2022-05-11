import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs/operators';
import { NetworkService } from '../services/network/network.service';
import { ConnectionStatus } from '@capacitor/network';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  public user: firebase.default.User;
  public isNetworkConnected: boolean;

  constructor(
    private isvcAuth: AuthService,
    private isvcNetwork: NetworkService
  ) { }

  async ngOnInit() {
    this.isvcAuth.user
      .pipe(
        tap((poUser: firebase.default.User) => this.user = poUser)
      ).subscribe();
      
    this.isvcNetwork.networkStatus$
      .pipe(
        tap((poConnectionStatus: ConnectionStatus) => this.isNetworkConnected = poConnectionStatus?.connected)
      ).subscribe();
  }

  public signOut() {
    this.isvcAuth.signOut();
  }

}
