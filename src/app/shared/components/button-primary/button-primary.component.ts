import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() label!: string;
  @Input() type?: string;
  @Input() url?: string;

  @Output() onClick = new EventEmitter<any>();
  constructor(private router: Router) {}

  buttonClick() {}

  ngOnInit(): void {}

  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
