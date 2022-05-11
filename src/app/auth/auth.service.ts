import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AuthComponent } from './auth/auth.component';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from '../services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: BehaviorSubject<firebase.default.User> = new BehaviorSubject(null);

  constructor(
    private isvcFirebaseAuth: AngularFireAuth,
    private isvcData: DataService,
    private ioModalCtrl: ModalController,
    private ioRouter: Router
  ) { }

  public async showAuthModal(): Promise<void> {
    const loAuthModal = await this.ioModalCtrl.create({
      component: AuthComponent,
      cssClass: "auth-modal",
      componentProps: {
        isModal: true
      }
    });
    loAuthModal.present();
  }

  public createLoginForm(poFormbuilder: FormBuilder): FormGroup {
    return poFormbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public createRegisterForm(poFormbuilder: FormBuilder): FormGroup {
    return poFormbuilder.group({
      pseudo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.checkPasswords });
  }

  public async register(poFormValue: { pseudo: string, email: string, password: string }): Promise<boolean> {
    let lbIsRegistered: boolean = false;

    await this.isvcFirebaseAuth.createUserWithEmailAndPassword(poFormValue.email, poFormValue.password)
      .then((poUserCredential: firebase.default.auth.UserCredential) => {
        poUserCredential.user.updateProfile({ displayName: poFormValue.pseudo });
        lbIsRegistered = true;
      })
      .catch(poErrorReason => console.log(poErrorReason))

    return lbIsRegistered;
  }

  public async signIn(poFormValue: { email: string, password: string }): Promise<boolean> {
    let lbIslogged: boolean = false;

    await this.isvcFirebaseAuth.signInWithEmailAndPassword(poFormValue.email, poFormValue.password)
      .then(_ => lbIslogged = true)
      .catch(poErrorReason => console.log(poErrorReason))

    return lbIslogged;
  }

  public signOut(): void {
    this.isvcFirebaseAuth.signOut();
    this.ioRouter.navigateByUrl("/home")
  }

  private checkPasswords(poFormGroup: FormGroup): { notSame: boolean; } {
    const password = poFormGroup.get('password').value;
    const confirmPassword = poFormGroup.get('confirmPassword').value;

    if (password != confirmPassword) {
      poFormGroup.get('confirmPassword').setErrors({});
      return { notSame: true };
    };
  
    return null;
  }

  public setAuthListener(): void {
    this.isvcFirebaseAuth.authState
      .pipe(
        tap((poUser: firebase.default.User) => {
          if (poUser) {
            this.user.next(poUser);
            this.isvcData.setUserDocListener(poUser.uid);
          }
          else {
            this.user.next(null);
            this.isvcData.emptyData();
          }
        })
      ).subscribe();
  }
}
