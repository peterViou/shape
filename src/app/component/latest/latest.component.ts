import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {DataService} from "../datas/data.service";
import {ISerie} from "../datas/iserie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit {

  public displayedSeries: ISerie[];
  public myOptions: MasonryOptions = {
    transitionDuration: '0s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true,
  };

  private _peter: ISerie[];

  private _fetchedSeries: ISerie[] = null;
  private _hasBeenFormated: boolean;
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
    console.log('_hasBeenFormated : ', this._hasBeenFormated);
    // Fetch the data only the first time
    if (!this._hasBeenFormated) {
      this._hasBeenFormated = true;
      console.log('_hasBeenFormated : ', this._hasBeenFormated);
      console.log(">>> Fetching Data from LATEST")
      this._dataService.getData()
        .do(series =>
          this.displayedSeries = series
            .slice(0, this._cacheInitLength))
        .subscribe(series =>
          this._fetchedSeries = this._dataService.formatData(series));
    }
    else {
      console.log("do nothing");
    }
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
