import {Component, OnInit, ViewChild} from "@angular/core";
import {SeriesService} from "./series.service";
import {ISerie} from "./iserie";
import {MasonryOptions} from "angular2-masonry";
import {Observable} from "rxjs/Observable";
import {IAsset} from "./iasset";
import {forEach} from "@angular/router/src/utils/collection";
import {DataService} from "./data.service";

@Component({
  selector: 'app-scrollable-content',
  templateUrl: './scrollable-content.component.html',
  styleUrls: ['./scrollable-content.component.css'],
  providers: [SeriesService, DataService]

})
export class ScrollableContentComponent implements OnInit {

  dataCache: ISerie[];
  bricks: IAsset[];

  active: boolean = false;
  errorMessage: string = "this is the error message";
  // public articles = [];
  // public dataCache = [];
  // private cacheInitLength: number = 20;
  private cacheMoreLength: number = 10;
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

  constructor(private _seriesService: SeriesService, private _dataService:DataService) {
    this.dataCache = [];
    // this.bricks = this.dataCache;
  }

  ngOnInit() {
    let self = this;
    // this.dataCache = self._dataService.getData();
    // self._seriesService.getSeries().subscribe(response => this.dataCache = response, error => this.errorMessage = < any > error);
    self._dataService.getData().subscribe(response => this.dataCache = response, error => this.errorMessage = < any > error);
    self._dataService.displayData();
    // for(var i = 1; i <= this.cacheMoreLength; i++){
    //   this.bricks.push(self._dataService.getData()[0]);
    // }

    // this.dataCache = self._dataService.getData();

    // console.log(this.bricks)
    // this.bricks = this.dataCache;
  }

  /**
   * Force the redraw of Masonry
   */
  refreshed(): void {
    console.log("refreshed !")
    this.monMacon.layout();
  }

  peter(items: any) {
    var toto: any;
    // console.log("Masonry layout is completed : " + items.length)
    this.monMacon.layout();
  }

  onScroll(): void {
    // for (var i = 1; i <= this.cacheMoreLength; i++) {
    //   this.articles.push(this.createArticle());
    // }
  }

  onBrickClick(brickID: number): void {
    console.log("click on brick #" + brickID);
    this._seriesService.displayData(this.dataCache, brickID);
    // this.bricks = this._seriesService.getSerieOfSeries(this.dataCache, brickID);
    // !this.active;

  }

}
