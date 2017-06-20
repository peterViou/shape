import {Component, OnInit, ViewChild} from '@angular/core';
import {MasonryOptions} from "angular2-masonry";
import {createAotCompiler} from "@angular/compiler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private series = [
    {
      title: 'BMW',
      artist: 'Tobias',
      assets: [
        {
          title: '01',
          src: ''
        }
      ]
    },
    {
      title: 'RENAULT',
      artist: 'Tobias',
      assets: [
        {
          title: '01',
          src: ''
        },
        {
          title: '02',
          src: ''
        },
        {
          title: '03',
          src: ''
        }
      ]
    },
    {
      title: 'OPEL',
      artist: 'Tobias',
      assets: [
        {
          title: '01',
          src: ''
        },
        {
          title: '02',
          src: ''
        },
        {
          title: '03',
          src: ''
        }
      ]
    }, {
      title: 'FERARRI',
      artist: 'Tobias',
      assets: [
        {
          title: '01',
          src: ''
        },
        {
          title: '02',
          src: ''
        },
        {
          title: '03',
          src: ''
        }
      ]
    }, {
      title: 'TESLA',
      artist: 'Tobias',
      assets: [
        {
          title: '01',
          src: ''
        },
        {
          title: '02',
          src: ''
        },
        {
          title: '03',
          src: ''
        }
      ]
    }, {
      title: 'MERCEDES',
      artist: 'Tobias',
      assets: [
        {
          title: '01',
          src: ''
        },
        {
          title: '02',
          src: ''
        },
        {
          title: '03',
          src: ''
        }
      ]
    }, {
      title: 'PEUGEOT',
      artist: 'Tobias',
      assets: [
        {
          title: '01',
          src: ''
        },
        {
          title: '02',
          src: ''
        },
        {
          title: '03',
          src: ''
        }
      ]
    },
    {
      title: 'TOYOTA',
      artist: 'Laroche',
      assets: [
        {
          title: '01',
          src: ''
        },
        {
          title: '02',
          src: ''
        },
        {
          title: '03',
          src: ''
        }
      ]
    }
  ]

  public articles = [];
  // public series = [];
  private cacheInitLength: number = 20;
  private cacheMoreLength: number = 10;
  private nb_articles: number = 0;

  // Instanciation of masonry's component "monMacon" declared in the template into the controller
  @ViewChild('myMasonry') private monMacon;
  public myOptions: MasonryOptions = {
    transitionDuration: '2s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true
  };

  constructor() {
  }

  private randomInt(min, max): number {
    return Math.floor(Math.random() * max + min);
  }

  private createArticle(): any {
    let width: number = this.randomInt(150, 400);
    let height: number = this.randomInt(150, 250);
    let toto = 'http://via.placeholder.com/' + width + 'x' + height + '/cccccc';
    // let toto = 'https://lorempixel.com/' + width + '/' + height ;//+ '/fashion';
    let monArticle = {title: this.nb_articles, artist: "Peter", src: toto}
    this.nb_articles++;
    return monArticle;
  }

  ngOnInit(): void {
    for (var i = 1; i <= this.cacheInitLength; i++) {
      this.articles.push(this.createArticle());
    }
    for (let serie of this.series) {
      for (let asset of serie.assets) {
        let width: number = this.randomInt(150, 400);
        let height: number = this.randomInt(150, 250);
        // let imageSrc = 'http://via.placeholder.com/' + width + 'x' + height + '/cccccc';
        let imageSrc = 'https://lorempixel.com/' + width + '/' + height;//+ '/fashion';
        if (asset.src == '') {
          asset.src = imageSrc;
        }
      }
    }

    console.log(this.series);

  }

  /**
   * Force the redraw of Masonry
   */
  refreshed(): void {
    console.log("refreshed !")
    this.monMacon.layout();
  }

  onScroll(): void {
    for (var i = 1; i <= this.cacheMoreLength; i++) {
      this.articles.push(this.createArticle());
    }
  }
}
