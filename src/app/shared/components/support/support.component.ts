import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private viewportscroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  onClickScroll(elId: string): void {
    this.viewportscroller.scrollToAnchor(elId);
  }
}
