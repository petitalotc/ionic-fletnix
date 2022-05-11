import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Input() public isModal: boolean;
  public loginForm: FormGroup;

  constructor(
    private ioFormBuilder: FormBuilder,
    private isvcAuth: AuthService,
    private ioRouter: Router,
    public ioModalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.loginForm = this.isvcAuth.createLoginForm(this.ioFormBuilder);
  }

  public onSubmitForm() {
    this.isvcAuth.signIn(this.loginForm.value).then((pbIsLogged: boolean) => {
      if (pbIsLogged) {
        if (this.isModal)
          this.ioModalCtrl.dismiss();
        else
          this.ioRouter.navigateByUrl("/home");
      }
    });
  }

}
