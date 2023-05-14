import { Component, OnInit } from '@angular/core';
interface Services {
  id: number;
  title: string;
  img: string;
  description: {
    project: string;
  }[];
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
      title: 'Федеральные заказчики',
      img: 'assets/images/service01.png',
      description: [
        {
          project:
            '- миграция с F5 BIG-IP и Radware Alteon ключевых ГИС и ИС (КИИ)',
        },
      ],
    },
    {
      id: 2,
      title: 'Ритейл',
      img: 'assets/images/service02.png',
      description: [
        {
          project: '– создание георезервируемых ДЦ (GSLB)',
        },
        {
          project: '- миграция с Cirtix NetScaler подсистем ЭП, порталов и CRM',
        },
      ],
    },
    {
      id: 3,
      title: 'Финансовые учреждения',
      img: 'assets/images/service03.png',
      description: [
        {
          project:
            '–подсистемы балансировки для виртуализации АРМ и приложений',
        },
        {
          project:
            '–«витрина» приложений, интеграция с Континент TLS и Kerberos',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
