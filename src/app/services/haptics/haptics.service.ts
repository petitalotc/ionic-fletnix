import { Injectable } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root'
})
export class HapticsService {

  constructor() { }

  public async hapticsVibrate(): Promise<void> {
    await Haptics.vibrate();
  };
  
  public async hapticsImpactMedium(): Promise<void> {
    await Haptics.impact({ style: ImpactStyle.Medium });
  };
  
  public async hapticsImpactLight(): Promise<void> {
    await Haptics.impact({ style: ImpactStyle.Light });
  };
  
  public async hapticsSelectionStart(): Promise<void> {
    await Haptics.selectionStart();
  };
  
  public async hapticsSelectionChanged(): Promise<void> {
    await Haptics.selectionChanged();
  };
  
  public async hapticsSelectionEnd(): Promise<void> {
    await Haptics.selectionEnd();
  };
}
