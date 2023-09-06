import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { DocumentReference } from 'firebase/firestore';
import { Observable } from 'rxjs';

interface NewsData {
  title: string;
  text: string;
  // Добавьте другие поля, если необходимо
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private firestore: AngularFirestore) {} // Изменено на AngularFirestore

  getNews(): Observable<any[]> {
    return this.firestore.collection('news').valueChanges();
  }

  updateNews(newsId: string, newData: any): Promise<void> {
    return this.firestore
      .collection('news')
      .doc(newsId)
      .set(newData, { merge: true }); // Изменено на set с параметром { merge: true }
  }

  deleteNews(newsId: string): Promise<void> {
    return this.firestore.collection('news').doc(newsId).delete();
  }
}
