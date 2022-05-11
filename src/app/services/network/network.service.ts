import { Injectable } from '@angular/core';
import { Dialog } from '@capacitor/dialog';
import { ConnectionStatus, Network } from '@capacitor/network';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  public networkStatus$: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(null);

  constructor() { }

  public async setNetworkStatusListener(): Promise<void> {
    const loNetworkStatus: ConnectionStatus = await Network.getStatus()
    this.networkStatus$.next(loNetworkStatus);
    if (loNetworkStatus.connected === false) {
      Dialog.alert({
        title: 'Problème de connexion',
        message: 'Veuillez vérifier votre connexion',
      });
    };

    Network.addListener('networkStatusChange', (poConnectionStatus: ConnectionStatus) => {
      console.log('Network status changed', poConnectionStatus);
      this.networkStatus$.next(poConnectionStatus);
      if (poConnectionStatus.connected === false) {
        Dialog.alert({
          title: 'Problème de connexion',
          message: 'Veuillez vérifier votre connexion',
        });
      };
    });
  }
}
