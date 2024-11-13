import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent, HttpClientModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit {
  currentArticles$!: Observable<Article[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.currentArticles$ = this.apiService.getArticles();
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}