import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  phoneNumber: string = Constants.phone;
  constructor() {}

  ngOnInit(): void {}
}
