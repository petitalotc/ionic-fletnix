import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  @Input() public isModal: boolean;
  public registerForm: FormGroup;

  constructor(
    private ioFormBuilder: FormBuilder,
    private isvcAuth: AuthService,
    private ioRouter: Router,
    public ioModalCtrl: ModalController
  ) { }

  ngOnInit(): void {
    this.registerForm = this.isvcAuth.createRegisterForm(this.ioFormBuilder)
  }

  public onSubmitForm(): void {
    this.isvcAuth.register(this.registerForm.value).then((pbIsRegistered: boolean) => {
      if (pbIsRegistered) {
        if (this.isModal)
          this.ioModalCtrl.dismiss();
        else
          this.ioRouter.navigateByUrl("/home");
      }
    });
  }

}
