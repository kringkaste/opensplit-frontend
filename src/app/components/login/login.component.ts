import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User()
  token: String = ""

  constructor(private auth: AuthService) { }

  onLogin(): void {
    this.auth.login(this.user)
    .then((user) => {
      console.log(user.json());
    })
    .catch((err) => {
      console.log(err);
    });
  }

  onToken(token: String): void {
    this.auth.tokenLogin(token)
    .then((user) => {
      localStorage.setItem('session_key', user.json().session_key);
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
