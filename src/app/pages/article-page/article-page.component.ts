import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleThumbnailComponent } from '../../components/article-thumbnail/article-thumbnail.component';
import { Article } from '../../models/article.model';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ AsyncPipe],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private http = inject(HttpClient);
  articlesId!: number;
  article$!: Observable<Article>;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articlesId = Number(params.get('id'));
      this.article$ = this.getArticleById(this.articlesId);
    });
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }
}
