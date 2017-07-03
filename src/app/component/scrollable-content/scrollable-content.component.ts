import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {SeriesService} from "./series.service";
import {MasonryOptions} from "angular2-masonry";
import {IAsset} from "./iasset";
import {DataService} from "./data.service";
import {ISerie} from "./iserie";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-scrollable-content',
  templateUrl: './scrollable-content.component.html',
  styleUrls: ['./scrollable-content.component.css'],
  providers: [SeriesService, DataService]

})
export class ScrollableContentComponent implements OnInit {

  completeSeries: ISerie[];

  displayedSeries: ISerie[];


  active: boolean = false;
  errorMessage: string = "this is the error message";
  // public articles = [];
  private cacheInitLength: number = 10;
  private cacheMoreLength: number = 5;
  private nb_articles: number = 0;

  // Instantiation of masonry's component "monMacon" declared in the template into the controller
  @ViewChild('myMasonry') private monMacon;
  // @ViewChild('myModal') private myModal;
  public myOptions: MasonryOptions = {
    transitionDuration: '0s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true,

  };

  constructor(private _dataService: DataService, private route: ActivatedRoute, private router: Router) {
console.log("CREATING ACROLL")
  }

  ngOnInit() {
    let self = this;
    if (!this.completeSeries ){
      self._dataService.getData().do(series => this.displayedSeries = series.slice(0,this.cacheInitLength)).subscribe(series => this.completeSeries = series);
    }

    this.route.params
      .subscribe(params => console.log("params = ",params))

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

  private offset = this.cacheInitLength;

  onScroll(): void {
    const newData = this.completeSeries.slice(this.offset,this.offset + this.cacheMoreLength);
    this.displayedSeries.splice(this.displayedSeries.length, 0, ...newData);
    this.offset+=this.cacheMoreLength;

  }

  onBrickClick(brickID: number): void {
    console.log("click on brick #" + this.displayedSeries[brickID].title);
    this.router.navigate(["/"+this.displayedSeries[brickID].title])


    // this._seriesService.displayData(this.dataCache, brickID);
    // this.bricks = this._seriesService.getSerieOfSeries(this.dataCache, brickID);
    // !this.active;

  }

}
