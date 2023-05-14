import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // define the animation named `@pageTransition`
    trigger('pageTransition', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title =
    'БИТС.БАЛАНС | Обеспечим гибкую балансировку и распределение нагрузки, масштабирование, надежность и георезервирование любых ваших сервисов, любой сложности';
  o: any;
  constructor(private router: Router) {}

  ngOnInit() {
    const scrollToTopPaths = [
      '/partners',
      '/',
      '/support',
      '/buy',
      '/about',
      '/contacts',
    ];
    this.router.events.subscribe((event) => {
      if (
        event instanceof NavigationEnd &&
        scrollToTopPaths.includes(event.url)
      ) {
        window.scrollTo(0, 0);
      }
    });
  }
}
