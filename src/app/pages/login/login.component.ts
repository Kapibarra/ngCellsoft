import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod'; //
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogin() {
    if (
      this.username === environment.username &&
      this.password === environment.password
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Неправильный логин или пароль';
    }
  }
}
