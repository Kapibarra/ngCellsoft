import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router, Routes } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
  mobile: boolean = false;
  isFilled: boolean = true;
  currentRoutes: Routes = routes.filter(
    (route) => route.data?.['navLabel'] != null
  );
  phoneNumber: string = Constants.phone;

  constructor(private viewportscroller: ViewportScroller, router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/') {
          this.isFilled = false;
        } else {
          this.isFilled = true;
        }
      }
    });
  }

  ngOnInit() {
    this.onScroll(event);
    if (window.screen.width <= 968) {
      this.mobile = true;
      console.log(this.mobile);
    }
  }
  onClickScroll(elId: string): void {
    this.viewportscroller.scrollToAnchor(elId);
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const verticalOffset = window.pageYOffset;
    verticalOffset > 40 ? (this.isSticky = true) : (this.isSticky = false);
  }
}
