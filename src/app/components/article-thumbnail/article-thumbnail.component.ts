import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule, NgClass } from '@angular/common';
import { NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [NgClass, RouterModule, CommonModule, HttpClientModule],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;
  @Output() notifyLike = new EventEmitter<Article>();

  sendNotification() {
    this.notifyLike.emit(this.article);
  }
}
