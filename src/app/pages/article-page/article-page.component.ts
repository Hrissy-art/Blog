import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleThumbnailComponent } from '../../components/article-thumbnail/article-thumbnail.component';
import { Article } from '../../models/article.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleThumbnailComponent, HttpClientModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private http: HttpClient = inject(HttpClient);

  articleId!: number;
  article!: Article;


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.getArticleById(this.articleId);
    });
  }
  getArticleById(id: number): void {
    this.http.get<Article>(`http://localhost:3000/articles/${id}`).subscribe(
      (data) => {
        this.article = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'article:', error);
      }
    );
  }
}
