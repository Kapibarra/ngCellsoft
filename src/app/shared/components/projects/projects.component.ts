import { Component, OnInit } from '@angular/core';
interface Projects {
  id: number;
  title: string;
  img?: string;
  description?: {
    project: string;
  }[];
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [
    {
      id: 1,
      title: 'Проектирование',
      // img: 'assets/images/project01.png',
      description: [
        {
          project: 'Полный комплект документации (РД, ЭД)',
        },
        {
          project: 'Погружение с учетом технических и бизнес-требований',
        },
        {
          project: 'Анализ смежных подсистем, вопросы интеграции',
        },
        {
          project: 'Компетенции в части архитектуры прикладных сервисов',
        },
      ],
    },
    {
      id: 2,
      title: 'Миграция имеющихся конфигураций',
      // img: 'assets/images/project02.png',
      description: [
        {
          project: 'Radware Alteon',
        },
        {
          project: 'F5 BIG-IP',
        },
        {
          project: 'Citrix NetScaler',
        },
      ],
    },
    {
      id: 3,
      title: 'Пуско-наладочные работы',
      // img: 'assets/images/project03.png',
    },
    {
      id: 4,
      title: 'Функциональные и нагрузочные испытания',
      // img: 'assets/images/project04.png',
    },
    {
      id: 5,
      title: 'Обучение',
      // img: 'assets/images/project05.png',
    },
    {
      id: 6,
      title: 'Сервисная поддержка согласно SLA',
      // img: 'assets/images/project06.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
