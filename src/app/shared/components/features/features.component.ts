import { Component, Input, OnInit } from '@angular/core';
interface Features {
  id: number;
  title: string;
  icon: string;
  keys?: {
    name: string;
    image: string;
    activeDialog?: boolean;
    dialogTitle: string;
    dialogDescription: string;
    dialogContent: {
      properties: {
        name: string;
      }[];
    }[];
  }[];
}
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  activeDialog: {} = {};

  features: Features[] = [
    {
      id: 1,
      title: 'Функциональные возможности',
      icon: 'assets/icons/featuresicon01.png',
      keys: [
        {
          name: 'Непосредственная маршрутизация',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description',
          dialogContent: [
            {
              properties: [
                {
                  name: 'test property',
                },
                {
                  name: 'test property 2',
                },
              ],
            },
          ],
        },
        {
          name: 'Непосредственная маршрутизация 2',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'test property 222',
                },
                {
                  name: 'test property 222',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor() {}
  active = false;
  @Input() init!: boolean;
  ngOnInit(): void {}
  toggleDialog($event: any) {
    console.log($event);
    this.active = !this.active;
  }
}
