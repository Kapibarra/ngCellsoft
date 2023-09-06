import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; // Используйте Router
import { Subscription, switchMap } from 'rxjs';

interface News {
  id: any;
  title: string;
  img: string;
  text: string;
}

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  post!: News;
  isLoading: boolean = true;
  private routeSub?: Subscription | null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private elementRef: ElementRef,
    private router: Router // Используйте Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const id = params.get('id');
          return this.http.get<News>(
            `https://cellsoft-2884a-default-rtdb.europe-west1.firebasedatabase.app/0/news/${id}.json`
          );
        })
      )
      .subscribe((response: News) => {
        this.post = response;
        this.isLoading = false;
      });
  }

  goToHome() {
    this.router.navigate(['/news']); // Используйте Router для навигации
    this.scrollIntoView('news');
  }

  scrollIntoView(id: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
