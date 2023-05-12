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
      title: 'Федеральные заказчики',
      img: 'assets/images/service01.png',
      description:
        '- миграция с F5 BIG-IP и Radware Alteon ключевых ГИС и ИС (КИИ)',
    },
    {
      id: 2,
      title: 'Ритейл',
      img: 'assets/images/service02.png',
      description:
        '– создание георезервируемых ДЦ (GSLB)  \n  - миграция с Cirtix NetScaler подсистем ЭП, порталов и CRM',
    },
    {
      id: 3,
      title: 'Финансовые учреждения',
      img: 'assets/images/service03.png',
      description:
        '–подсистемы балансировки для виртуализации АРМ и приложений  \n  –«витрина» приложений, интеграция с Континент TLS и Kerberos',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
