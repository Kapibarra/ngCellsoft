import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      const loginTime = localStorage.getItem('loginTime');
      if (loginTime) {
        const currentTime = new Date().getTime();
        const elapsedMinutes =
          (currentTime - parseInt(loginTime, 10)) / (1000 * 60);

        if (elapsedMinutes <= 30) {
          return true;
        } else {
          localStorage.removeItem('isLoggedIn'); // Удаляем метку входа
          localStorage.removeItem('loginTime'); // Удаляем метку времени входа
          this.router.navigate(['/login']); // Перенаправляем на страницу входа
          return false;
        }
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
