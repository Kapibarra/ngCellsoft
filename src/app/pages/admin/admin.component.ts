import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/shared/services/news.service';
interface News {
  id: any;
  title: string;
  image: string;
  text: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  news: News[] = [];
  newsForm: FormGroup;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private newsService: NewsService
  ) {
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      image: [null],
    });
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    const firebaseUrl =
      'https://cellsoft-2884a-default-rtdb.europe-west1.firebasedatabase.app/news.json';
    this.http.get(firebaseUrl).subscribe((response: any) => {
      if (response) {
        this.news = Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
      } else {
        this.news = [];
      }
      console.log(response);
    });
  }
  handleUpload(event: Event) {
    if (event && event.target) {
      const inputElement = event.target as HTMLInputElement;
      const files = inputElement.files;
      if (files && files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const dataURL = reader.result as string;
          this.newsForm.get('image')?.setValue(dataURL);
        };
        reader.readAsDataURL(file);
      }
    }
  }
  async deleteNews(newsId: string) {
    try {
      await this.newsService.deleteNews(newsId);
    } catch (error) {
      console.error('Ошибка при удалении новости', error);
    } finally {
      this.getNews();
    }
  }
  async addNews() {
    if (this.newsForm.valid) {
      const newsData = this.newsForm.value;
      try {
        await this.newsService.addNews(newsData);
        this.newsForm.reset();
      } catch (error) {
        console.error('Ошибка при добавлении новости', error);
      } finally {
        this.getNews();
      }
    }
  }
}
