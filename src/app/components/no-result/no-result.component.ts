import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-no-result',
  templateUrl: './no-result.component.html',
  styleUrls: ['./no-result.component.scss'],
})
export class NoResultComponent implements OnInit {

  public needUser: boolean;
  public isUserlogged: boolean = false;
  @Input() public set checkUser(pbCheckUser: boolean) {
    if (pbCheckUser)
      this.needUser = true;
  }; 

  constructor(
    public isvcAuth: AuthService
  ) { }

  ngOnInit() {
    this.isvcAuth.user.pipe(
      tap((poUser: firebase.default.User) => this.isUserlogged = poUser? true : false)
    ).subscribe();
  }

}
