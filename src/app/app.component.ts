import {Component, ViewChild} from '@angular/core';
import {MasonryOptions, AngularMasonry} from "angular2-masonry";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // public cacheInitLength = 10;
  private cacheMoreLength = 10;
  public cacheLength = 10;
  private latestMasonry: AngularMasonry //= my;

  public myOptions: MasonryOptions = {
    transitionDuration: '.00000001s',
    resize: true
  };

  @ViewChild('myMasonry') private monMacon;

  articles = [
    {title: '1', artist: 'Boualam Allouche', type: "video"},
    {title: '2', artist: 'Stéphanie de Saint Marc', type: "video"},
    {title: '3', artist: 'Peter Duchastenier', type: "video"},
    {title: '4', artist: 'Stéphanie de Saint Marc', type: "video"},
    {title: '5', artist: 'Stéphanie de Saint Marc', type: "video"},
    {title: '6', artist: 'Stéphanie de Saint Marc', type: "video"},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '7', artist: 'Marcia Cortes Ortega'},
    {title: '8', artist: 'Marcia Cortes Ortega'}
  ];



  cacheInit() {

    // myMasonry.add()
    // this.
  }

  refreshed() {
    console.log("refreshed !")
    this.monMacon.layout();
  }

  onScroll() {

    for (var i = 1; i <= this.cacheMoreLength; i++) {
      this.articles.push(this.articles[i]);
      this.monMacon.layout();
    }

    // for (var i = 1; i <= this.cacheMoreLength; i++) {
    //   this.monMacon.add();
    // }


    console.log(this.articles.length + ' photo loaded');
    // $route.reload();
    // $window.location.reload();
  }
}


