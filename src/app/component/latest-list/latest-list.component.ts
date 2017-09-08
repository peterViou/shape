import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {DataService} from "./data.service";
import {ISerie} from "./iserie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-latest-list',
  templateUrl: './latest-list.component.html',
  styleUrls: ['./latest-list.component.scss'],
})
export class ScrollableContentComponent implements OnInit {

  public displayedSeries: ISerie[];
  public myOptions: MasonryOptions = {
    transitionDuration: '0s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true,
  };

  private _fetchedSeries: ISerie[] = null;
  private _hasBeenFormated: boolean = false;
  private _currentSerie: ISerie = null;
  private _cacheInitLength: number = 10; // should depend of the window widths
  private _cacheMoreLength: number = 4; // should depend of the window widths
  private _numberOfItemsInCache = this._cacheInitLength;
  // _masonryInstance : Variable linked to masonry's component instantiated in the template
  @ViewChild('myMasonry') private _masonryInstance;

  constructor(private _dataService: DataService,
              private _route: ActivatedRoute,
              private _router: Router) {
    console.log(">>> Creating LATEST LIST")
  }

  ngOnInit() {
    // Fetch the data only the first time
    if (!this._hasBeenFormated) {
      console.log(">>> Fetching Data")
      this._dataService.getData()
        .do(series =>
          this.displayedSeries = series
            .slice(0, this._cacheInitLength))
        .subscribe(series =>
          this._fetchedSeries = this.formatData(series));
    }
    else{
      console.log("do nothing");
    }
  }

  formatData(mySeries: ISerie[]): ISerie[] {
    if (!this._hasBeenFormated) {
      this._hasBeenFormated = true;
      mySeries
        .map(result => {
          // result.title =result.title;
          result.assets.forEach(asset => {
            asset.thumbnail = "http://www.shape-production.fr/photos/" + asset.thumbnail;
          })

          return result;
        });
    }
    console.log("FORMAT DATA ahahahaha", mySeries);
    return mySeries
  }

  public onScroll(): void {
    const newData = this._fetchedSeries.slice(this._numberOfItemsInCache, this._numberOfItemsInCache + this._cacheMoreLength);
    this.displayedSeries.splice(this.displayedSeries.length, 0, ...newData);
    this._numberOfItemsInCache += this._cacheMoreLength;
  }

  public onSerieClick(serieID: number): void {
    this._dataService.serieToDisplay = this.displayedSeries[serieID];
    this._router.navigate(["/series/" + this.displayedSeries[serieID].title]);
  }

  /**
   * Force the redraw of Masonry
   */
  public masonryRedraw() {
    // console.log('complete series = ' + this._completeSeries);
    this._masonryInstance.layout();
  }

}
