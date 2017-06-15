import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() {
  }

  @Input() article;

  randomInt(min, max) {
    return Math.floor(Math.random() * max + min);
  }

  getItem() {
    var width = this.randomInt(150, 400);
    var height = this.randomInt(150, 250);
    var item = 'https://lorempixel.com/' + width + '/' + height + '/fashion';
    return item;
  }

  ngOnInit() {
    this.article.src = this.getItem();
  }


}
