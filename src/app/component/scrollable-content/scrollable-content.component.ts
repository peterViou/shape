import {Component, OnInit, ViewChild} from '@angular/core';
import {SeriesService} from "../../series.service";
import {ISerie} from "../../iserie";
import {MasonryOptions} from "angular2-masonry";

@Component({
  selector: 'app-scrollable-content',
  templateUrl: './scrollable-content.component.html',
  styleUrls: ['./scrollable-content.component.css'],
  providers: [SeriesService]

})
export class ScrollableContentComponent implements OnInit {

  series: ISerie[];

  active:boolean = false;
  errorMessage: string = "this is the error message";
  // public articles = [];
  // public series = [];
  // private cacheInitLength: number = 20;
  // private cacheMoreLength: number = 10;
  private nb_articles: number = 0;

  // Instantiation of masonry's component "monMacon" declared in the template into the controller
  @ViewChild('myMasonry') private monMacon;
  @ViewChild('myModal') private myModal;
  public myOptions: MasonryOptions = {
    transitionDuration: '0s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true,

  };

  constructor(private _seriesService: SeriesService) {
    this.series = [];
  }

  ngOnInit() {
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

  peter(items: any){
    var toto:any;
    // console.log("Masonry layout is completed : " + items.length)
    this.monMacon.layout();
  }

  onScroll(): void {
    // for (var i = 1; i <= this.cacheMoreLength; i++) {
    //   this.articles.push(this.createArticle());
    // }
  }

  zoom():void{
    console.log("clicliclic");
    !this.active;
  }

}
