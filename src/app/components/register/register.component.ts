import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User()
  status: String

  constructor(private auth: AuthService) {}

  onRegister(): void {
    this.auth.register(this.user)
    .then((user) => {
      console.log(user.json())
      this.status = "Account created."
    })
    .catch((err) => {
      console.log(err)
    });
  }
}
