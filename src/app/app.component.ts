import {Component, OnInit, ViewChild} from '@angular/core';
import {MasonryOptions} from "angular2-masonry";
import {SeriesService} from "./series.service";
import {ISerie} from "./iserie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SeriesService]
})

export class AppComponent implements OnInit {
  series: ISerie[];
  errorMessage: string = "this is the error message";
  // public articles = [];
  // public series = [];
  // private cacheInitLength: number = 20;
  // private cacheMoreLength: number = 10;
  private nb_articles: number = 0;

  // Instantiation of masonry's component "monMacon" declared in the template into the controller
  @ViewChild('myMasonry') private monMacon;
  public myOptions: MasonryOptions = {
    transitionDuration: '2s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true
  };

  constructor(private _seriesService: SeriesService) {
    this.series = [];
  }

  ngOnInit(): void {
    let self = this;
    self._seriesService.getSeries().subscribe(response => this.series = response, error => this.errorMessage = < any > error);
  }

  /**
   * Force the redraw of Masonry
   */
  refreshed(): void {
    console.log("refreshed !")
    this.monMacon.layout();
  }

  onScroll(): void {
    // for (var i = 1; i <= this.cacheMoreLength; i++) {
    //   this.articles.push(this.createArticle());
    // }
  }
}
