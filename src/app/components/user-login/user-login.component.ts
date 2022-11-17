import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-login',
  styleUrls: ['./user-login.component.scss'],
  templateUrl: './user-login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent {
  readonly loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()});

  constructor(private _userService: UserService) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._userService.create(
      {
        username: loginForm.get('username')?.value,
        password: loginForm.get('password')?.value,
      }
    ).subscribe();
  }
}
