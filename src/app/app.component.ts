import {Component, OnInit, ViewChild} from '@angular/core';
import {MasonryOptions} from "angular2-masonry";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  private articles = [];
  private cacheInitLength = 20;
  private cacheMoreLength = 10;

  // Instanciation of masonry's component "monMacon" declared in the template into the controller
  @ViewChild('myMasonry') private monMacon;
  public myOptions: MasonryOptions = {
    transitionDuration: '0.8s',
    resize: true,
    hiddenStyle: { opacity: 0 },
    fitWidth: true
  };

  constructor() {
  }

  ngOnInit():void {
    for (var i = 1; i <= this.cacheInitLength; i++) {
      var width:number = this.randomInt(150, 400);
      var height:number = this.randomInt(150, 250);
      // let toto = 'http://via.placeholder.com/' + width + 'x' + height + '/cccccc';
      let toto = 'https://lorempixel.com/' + width + '/' + height;// + '/fashion';
      let monArticle = {title: i, artist:"Peter", src: toto}
      this.articles.push(monArticle);
    }
  }

  private randomInt(min, max):number {
    return Math.floor(Math.random() * max + min);
  }

  /**
   * Force the redraw of Masonry
   */
  refreshed():void {
    console.log("refreshed !")
    this.monMacon.layout();

  }

  onScroll():void {
    for (var i = 1; i <= this.cacheMoreLength; i++) {
      let width:number = this.randomInt(150, 400);
      let height:number = this.randomInt(150, 250);
      // let toto = 'http://via.placeholder.com/' + width + 'x' + height + '/cccccc';
      let toto = 'https://lorempixel.com/' + width + '/' + height ;//+ '/fashion';
      let monArticle = {title: i, artist:"Peter", src: toto}
      this.articles.push(monArticle);
    }
  }

}


