import { Component, Input, OnInit } from '@angular/core';
interface Features {
  id: number;
  title: string;

  keys?: {
    name: string;
    image: string;
    activeDialog?: boolean;
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
      keys: [
        { name: 'Название 1', image: 'url/to/image1.jpg', activeDialog: false },
        { name: 'Название 2', image: 'url/to/image2.jpg', activeDialog: false },
        { name: 'Название 3', image: 'url/to/image3.jpg', activeDialog: false },
        { name: 'Название 4', image: 'url/to/image4.jpg', activeDialog: false },
        { name: 'Название 5', image: 'url/to/image5.jpg', activeDialog: false },
        { name: 'Название 6', image: 'url/to/image6.jpg', activeDialog: false },
      ],
    },
    {
      id: 2,
      title: 'Режим работы',
      keys: [
        { name: 'Название 1', image: 'url/to/image1.jpg', activeDialog: false },
        { name: 'Название 2', image: 'url/to/image2.jpg', activeDialog: false },
        { name: 'Название 3', image: 'url/to/image3.jpg', activeDialog: false },
        { name: 'Название 4', image: 'url/to/image4.jpg', activeDialog: false },
        { name: 'Название 5', image: 'url/to/image5.jpg', activeDialog: false },
        { name: 'Название 6', image: 'url/to/image6.jpg', activeDialog: false },
      ],
    },
    {
      id: 3,
      title: 'Материалы',
      keys: [
        { name: 'Название 1', image: 'url/to/image1.jpg', activeDialog: false },
        { name: 'Название 2', image: 'url/to/image2.jpg', activeDialog: false },
        { name: 'Название 3', image: 'url/to/image3.jpg', activeDialog: false },
        { name: 'Название 4', image: 'url/to/image4.jpg', activeDialog: false },
        { name: 'Название 5', image: 'url/to/image5.jpg', activeDialog: false },
        { name: 'Название 6', image: 'url/to/image6.jpg', activeDialog: false },
      ],
    },
    {
      id: 4,
      title: 'Производительности и масштабирование',
      keys: [
        { name: 'Название 1', image: 'url/to/image1.jpg', activeDialog: false },
        { name: 'Название 2', image: 'url/to/image2.jpg', activeDialog: false },
        { name: 'Название 3', image: 'url/to/image3.jpg', activeDialog: false },
        { name: 'Название 4', image: 'url/to/image4.jpg', activeDialog: false },
        { name: 'Название 5', image: 'url/to/image5.jpg', activeDialog: false },
        { name: 'Название 6', image: 'url/to/image6.jpg', activeDialog: false },
      ],
    },
    {
      id: 5,
      title: 'Безопасность',
      keys: [
        { name: 'Название 1', image: 'url/to/image1.jpg', activeDialog: false },
        { name: 'Название 2', image: 'url/to/image2.jpg', activeDialog: false },
        { name: 'Название 3', image: 'url/to/image3.jpg', activeDialog: false },
        { name: 'Название 4', image: 'url/to/image4.jpg', activeDialog: false },
        { name: 'Название 5', image: 'url/to/image5.jpg', activeDialog: false },
        { name: 'Название 6', image: 'url/to/image6.jpg', activeDialog: false },
      ],
    },
    {
      id: 6,
      title: 'Совместимомсть',
      keys: [
        { name: 'Название 1', image: 'url/to/image1.jpg', activeDialog: false },
        { name: 'Название 2', image: 'url/to/image2.jpg', activeDialog: false },
        { name: 'Название 3', image: 'url/to/image3.jpg', activeDialog: false },
        { name: 'Название 4', image: 'url/to/image4.jpg', activeDialog: false },
        { name: 'Название 5', image: 'url/to/image5.jpg', activeDialog: false },
        { name: 'Название 6', image: 'url/to/image6.jpg', activeDialog: false },
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
