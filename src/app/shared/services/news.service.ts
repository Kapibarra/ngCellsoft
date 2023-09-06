import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentData,
} from '@angular/fire/compat/firestore';
import { DocumentReference } from 'firebase/firestore';
import { Observable } from 'rxjs';

interface NewsData {
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private firestore: AngularFirestore, private http: HttpClient) {}

  getNews(): Observable<any[]> {
    return this.firestore.collection('news').valueChanges();
  }
  async addNews(newsData: any): Promise<any> {
    const firebaseUrl =
      'https://cellsoft-2884a-default-rtdb.europe-west1.firebasedatabase.app/news.json';

    try {
      const response = await this.http.post(firebaseUrl, newsData).toPromise();
      return response;
    } catch (error) {
      console.error('Ошибка при добавлении новости', error);
      throw error;
    }
  }

  updateNews(newsId: string, newData: any): Promise<void> {
    return this.firestore
      .collection('news')
      .doc(newsId)
      .set(newData, { merge: true });
  }

  //   deleteNews(newsId: string): Promise<void> {
  //     return this.firestore.collection('news').doc(newsId).delete();
  //   }

  async deleteNews(newsId: string): Promise<void> {
    const url = `https://cellsoft-2884a-default-rtdb.europe-west1.firebasedatabase.app/news/${newsId}.json`;
    try {
      await this.http.delete(url).toPromise();
    } catch (error) {
      // Обработка ошибок при удалении
      console.error('Ошибка при удалении новости', error);
      throw error;
    }
  }
}
