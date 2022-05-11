import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  public showRegisterPage: boolean;
  public buttonText: string;
  @Input() public isModal: boolean;

  constructor(
    public ioRoute: ActivatedRoute,
    public ioModalCtrl: ModalController
  ) { }

  ngOnInit() {
    if (this.ioRoute.snapshot.params.page === "register")
      this.showRegisterPage = true;
    
    this.refreshButtonText();
  }

  public toggleAuthPage(): void {
    this.showRegisterPage = this.showRegisterPage ? false : true;
    this.refreshButtonText();
  }

  private refreshButtonText(): void {
    if (this.showRegisterPage) {
      this.buttonText = "Se connecter";
    }
    else
      this.buttonText = "S'inscrire";
  }

  public closeModal(): void {
    this.ioModalCtrl.dismiss();
  }

}
