import {Component} from '@angular/core';
import {MasonryOptions} from "angular2-masonry";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent   {
  articles = [
    {title: '1', artist:'Boualam Allouche', type:"video"},
    {title: '2', artist:'Stéphanie de Saint Marc', type:"video"},
    {title: '3', artist:'Peter Duchastenier', type:"video"},
    {title: '4', artist:'Stéphanie de Saint Marc', type:"video"},
    {title: '5', artist:'Stéphanie de Saint Marc', type:"video"},
    {title: '6', artist:'Stéphanie de Saint Marc', type:"video"},
    {title: '7', artist:'Marcia Cortes Ortega'},
    {title: '8', artist:'Marcia Cortes Ortega'}
  ];

  public myOptions: MasonryOptions = {
    transitionDuration: '0.4s',
    resize: true
  };

  onScroll () {

    for(var i = 1; i <= 8; i++) {
      this.articles.push(this.articles[i]);
    }
    console.log(this.articles.length + ' photo loaded');
  }
}


