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
  news: News[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getNews();
  }
  getNews(): void {
    const firebaseUrl =
      'https://cellsoft-2884a-default-rtdb.europe-west1.firebasedatabase.app/news.json';

    this.http.get(firebaseUrl).subscribe((response: any) => {
      if (response) {
        // Преобразуем объект в массив
        this.news = Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
      } else {
        // Если данных нет, можно инициализировать this.news пустым массивом
        this.news = [];
      }
      console.log(response);
    });
  }
}
