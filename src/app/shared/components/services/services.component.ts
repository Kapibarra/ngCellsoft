import { Component, OnInit } from '@angular/core';
interface Services {
  id: number;
  title: string;
  img: string;
  description: string;
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: Services[] = [
    {
      id: 1,
      title: 'Название проекта',
      img: 'assets/images/service01.png',
      description:
        'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    },
    {
      id: 2,
      title: 'Название проекта',
      img: 'assets/images/service01.png',
      description:
        'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    },
    {
      id: 3,
      title: 'Название проекта',
      img: 'assets/images/service01.png',
      description:
        'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    },
    {
      id: 4,
      title: 'Название проекта',
      img: 'assets/images/service01.png',
      description:
        'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    },
    {
      id: 5,
      title: 'Название проекта',
      img: 'assets/images/service01.png',
      description:
        'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    },
    {
      id: 6,
      title: 'Название проекта',
      img: 'assets/images/service01.png',
      description:
        'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
