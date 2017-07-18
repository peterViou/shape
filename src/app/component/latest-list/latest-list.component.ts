import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {DataService} from "./data.service";
import {ISerie} from "./iserie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-scrollable-content',
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

  private _completeSeries: ISerie[];
  private _currentSerie: ISerie = null;
  private _cacheInitLength: number = 10; // should depend of the window widths
  private _cacheMoreLength: number = 4; // should depend of the window widths
  private _numberOfItemsInCache = this._cacheInitLength;

  @ViewChild('myMasonry') private _masonryInstance; // _masonryInstance : Variable linked to masonry's component instantiated in the template

  constructor(private _dataService: DataService,
              private _route: ActivatedRoute,
              private _router: Router) {
    console.log(">>> Creating ScrollableContentComponent")
  }

  ngOnInit() {
    // Fetch the data only the first time
    if (!this._completeSeries) {
      console.log(">>> Fetching Data")
      const toto = this._dataService.getData();
      console.log("toto ",toto.do, toto);
      toto.do(series => this.displayedSeries = series.slice(0, this._cacheInitLength)).subscribe(series => this._completeSeries = series);

    }

  }

  public onScroll(): void {
    const newData = this._completeSeries.slice(this._numberOfItemsInCache, this._numberOfItemsInCache + this._cacheMoreLength);
    this.displayedSeries.splice(this.displayedSeries.length, 0, ...newData);
    this._numberOfItemsInCache += this._cacheMoreLength;
  }

  public onBrickClick(serieID: number): void {
    this._dataService.serieToDisplay = this.displayedSeries[serieID];
    this._router.navigate(["/series/" + this.displayedSeries[serieID].title]);
  }

  /**
   * Force the redraw of Masonry
   */
  public masonryRedraw() {
    this._masonryInstance.layout();
  }

}
