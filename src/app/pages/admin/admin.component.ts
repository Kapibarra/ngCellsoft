import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface News {
  id: any;
  title: string;
  img: string;
  text: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  news: News[] = [];
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
