import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleThumbnailComponent } from '../../components/article-thumbnail/article-thumbnail.component';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleThumbnailComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  article!: Article;


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
  }
}
