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
          name: 'Режимы балансировки',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Round Robin',
                },
                {
                  name: 'Least Connections',
                },
                {
                  name: 'Source IP / Hash',
                },
                {
                  name: 'SSL session ID',
                },
                {
                  name: 'Cookie и HTTP headers',
                },
                {
                  name: 'Persistence',
                },
                {
                  name: 'Время ответа сервера',
                },
                {
                  name: 'ACL',
                },
                {
                  name: 'Пользовательские логические конструкции',
                },
                {
                  name: 'Резервные бэкенды и группы доступности',
                },
                {
                  name: '«Веса» и приоритеты серверов',
                },
                {
                  name: 'Изменение портов балансируемого сервиса',
                },
                {
                  name: 'Группировка сетевых портов и сервисов',
                },
                {
                  name: 'Pooling сессий бэкенда',
                },
                {
                  name: 'Ограничение сессий для серверов',
                },
                {
                  name: 'Поддержка сегментов маршрутизации',
                },
              ],
            },
          ],
        },
        {
          name: 'Сервисные мониторы',
          image: 'assets/images/image133.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Контроль физических портов адаптера',
                },
                {
                  name: 'Протоколы health check (TCP, UDP, ICMP, ARP)',
                },
                {
                  name: 'Сервисы (DNS, LDAP/S, HTTP/S, FTP, IMAP, POP3, SIP, SMTP, SNMP, Kerberos, SSL Hello)',
                },
                {
                  name: 'Специализированные HTTP GET запросы',
                },
                {
                  name: 'Пользовательские варианты проверок и поддержка автоматизации / скриптов',
                },
                {
                  name: 'Логические комбинации перечисленных вариантов',
                },
                {
                  name: 'Настраиваемое количество положительных и отрицательных проб для фиксации доступности',
                },
                {
                  name: 'Гибкая настройка таймаутов и keepalive',
                },
              ],
            },
          ],
        },
        {
          name: 'Контроль и модификация HTTP',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Content based switching',
                },
                {
                  name: 'HTTP redirect',
                },
                {
                  name: 'HTTP rewrite запросов',
                },
                {
                  name: 'HTTP rewrite ответов',
                },
                {
                  name: 'Модификация headers',
                },
                {
                  name: 'HTTP-мониторы контроль доступности через GET-запросы',
                },
                {
                  name: 'Мультипликация',
                },
                {
                  name: 'Возможность отправки PUT/POST-запросов',
                },
              ],
            },
          ],
        },
        {
          name: 'Компрессия и кеширование',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Сокращение нагрузки серверов приложений',
                },
                {
                  name: 'Оптимизация трафика каналов связи',
                },
                {
                  name: 'Настройка гибких политик и правил',
                },
                {
                  name: 'Персонализация',
                },
              ],
            },
          ],
        },
        {
          name: 'Аудит трафика',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Запись метаданных сессий (время, IP источника и назначения, порты, заголовки и т.п.)',
                },
                {
                  name: 'Запись содержимого запросов и ответов HTTP (GET/PUT/POST)',
                },
                {
                  name: 'Создание и настройка триггеров записи',
                },
                {
                  name: 'Mirroring',
                },
                {
                  name: 'Отправка на внешний сервер хранения',
                },
                {
                  name: 'Интеграция с ELK',
                },
              ],
            },
          ],
        },
        {
          name: 'Централизованный мониторинг',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Статистика по сессиям, очередям, трафику, заголовкам, серверам и не только',
                },
                {
                  name: 'Статусы и состояния сервисов',
                },
                {
                  name: 'Счётчики ошибок и времени доступности',
                },
                {
                  name: 'Поддержка ZABBIX',
                },
                {
                  name: 'Поддержка Prometheus',
                },
                {
                  name: 'Интеграция с ELK',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Режимы работы',
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
                  name: 'Ответы от бэкендов направляются напрямую клиентам',
                },
                {
                  name: 'Не требуется трансляция адресов, только замена MAC назначения',
                },
                {
                  name: 'Высокая масштабируемость',
                },
                {
                  name: 'Эффективность для больших пулов',
                },
              ],
            },
          ],
        },
        {
          name: 'Проксирование',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Весь трафик проходит через балансировщик',
                },
                {
                  name: 'Возможна работа с одним сетевым интерфейсом',
                },
                {
                  name: 'Выполняется трансляция адресов',
                },
                {
                  name: 'Расширенный функционал',
                },
              ],
            },
          ],
        },
        {
          name: 'Мультиплексирование',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Нивелируются недостатки методов непосредственной маршрутизации и проксирования',
                },
                {
                  name: 'Абсолютная масштабируемость',
                },
                {
                  name: 'Без ограничений функционала',
                },
              ],
            },
          ],
        },
        {
          name: 'Раскрытие SSL',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Поддержка современных алгоритмов',
                },
                {
                  name: 'Гибкая настройка TLS (ciphers / suites, curves, ecdsa / ecdhe / aes / gcm / sha, размер ключа, пользовательские DH)',
                },
                {
                  name: 'Поддержка аппаратного ускорения',
                },
                {
                  name: 'HTTP/2',
                },
              ],
            },
          ],
        },
        {
          name: 'SSL мост',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Безопасный трафик во всех сегментах',
                },
                {
                  name: 'Глубокий анализ HTTP трафика на балансировщике (SSL Inspection)',
                },
                {
                  name: 'Единая точка для обновления сертификатов',
                },
                {
                  name: 'Возможность использования самоподписанныхсертификатов на балансируемых серверах',
                },
              ],
            },
          ],
        },
        {
          name: 'Поддержка SNI',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Решение проблемы ограниченного кол-ва IPv4 адресов',
                },
                {
                  name: 'Решение проблем Multi-Domain (SAN) и wildcard сертификатов',
                },
                {
                  name: 'Клиент сообщает имя хоста при «рукопожатии» TLS и получает правильный сертификат',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Производительность и масштабирование',
      icon: 'assets/icons/featuresicon01.png',
      keys: [
        {
          name: 'Сохранение состояний',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Решение проблем повторных авторизаций',
                },
                {
                  name: 'Персистентные таблицы сессий',
                },
                {
                  name: 'Настраиваемые размер и время хранения записей',
                },
                {
                  name: 'Cookie / бэкенд-сервер',
                },
                {
                  name: 'IP клиента / бэкенд-сервер',
                },
                {
                  name: 'SSL session ID / бэкенд-сервер',
                },
              ],
            },
          ],
        },
        {
          name: 'Производительность',
          image: 'assets/images/image133.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Проблема – ограничения в работе ядра ОС с сетевыми адаптерами',
                },
                {
                  name: 'Решение – экосистема DPDK',
                },
                {
                  name: 'Снижение нагрузки на CPU при обработке пакетов',
                },
                {
                  name: 'Поддержка аппаратных и программных реализаций',
                },
                {
                  name: 'Поддержка виртуализации',
                },
                {
                  name: 'Снятие лимита сессий',
                },
              ],
            },
          ],
        },
        {
          name: 'Кластер, надежность и масштабирование',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Отказоустойчивые решения',
                },
                {
                  name: 'Синхронизация конфигураций',
                },
                {
                  name: 'Синхронизация персистентных таблиц',
                },
                {
                  name: 'Распределение нагрузки на узлы балансировки и гибкое масштабирование Active/Active (мульти VIP)',
                },
                {
                  name: 'Multicast и unicast режимы контроля доступности узлов',
                },
              ],
            },
          ],
        },
        {
          name: 'Масштабирование 2.0',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Настоящее Active/Active горизонтальное масштабирование',
                },
                {
                  name: 'Обеспечение персистентности сессий',
                },
                {
                  name: 'Ребалансировка при добавлении / исключении узлов в реальном времени',
                },
                {
                  name: 'Дополнительные возможности при масштабировании высоконагруженных систем, даже если это один монолитный сервис',
                },
              ],
            },
          ],
        },
        {
          name: 'Геораспределенные системы и глобальная балансировка',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'Классический ADNS с контролем состояния сервисов',
                },
                {
                  name: 'Поддержка географически распределенных архитектур',
                },
                {
                  name: 'Active/Active, Active/Standby, Proximity и сложныекомбинированные правила',
                },
                {
                  name: 'Гибкие политики ответов DNS, их балансировка и приоритизация на основе параметров клиентов',
                },
                {
                  name: 'Контроль времени ответа и доступности сайтов',
                },
                {
                  name: 'Возможность использования результатов health check стандартной базовой балансировки',
                },
              ],
            },
          ],
        },
        {
          name: 'REST API',
          image: 'assets/images/image12.png',
          activeDialog: false,
          dialogTitle: 'test',
          dialogDescription: 'test description 2',
          dialogContent: [
            {
              properties: [
                {
                  name: 'REST API интерфейс с контролем корректности поступающих данных',
                },
                {
                  name: 'Стандартные GET, PUT, POSТ, DELETE методы',
                },
                {
                  name: 'Более 20 выделенных эндпоинтов',
                },
                {
                  name: 'Единый интерфейс для конфигурирования и получения runtime статистики',
                },
                {
                  name: 'Поддержка транзакционного режима',
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
