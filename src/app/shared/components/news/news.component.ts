import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface News {
  id: any;
  title: string;
  img: string;
  text: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: News[] = [
    {
      id: 1,
      title: 'News 1',
      img: `assets/images/service01.png`,
      text: 'text news 1',
    },
    {
      id: 2,
      title: 'News 2',
      img: 'assets/images/service01.png',
      text: 'text news 2',
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getNews();
  }
  getNews(): void {
    const firebaseUrl =
      'https://cellsoft-2884a-default-rtdb.europe-west1.firebasedatabase.app/0/news.json';

    this.http.get(firebaseUrl).subscribe((response: any) => {
      this.news = response;
      console.log(response);

      // Например, сохранение данных в переменную news
    });
  }
}
