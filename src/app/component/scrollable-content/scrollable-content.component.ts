import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {DataService} from "./data.service";
import {ISerie} from "./iserie";
import {ActivatedRoute, Router} from "@angular/router";
import {SeriesService} from "./series.service";

@Component({
  selector: 'app-scrollable-content',
  templateUrl: './scrollable-content.component.html',
  styleUrls: ['./scrollable-content.component.css'],
  providers: [DataService, SeriesService]

})

// TODO : étrange, lorsque je supprime SeriesService des provider, >>>erreur

export class ScrollableContentComponent implements OnInit {

  public displayedSeries: ISerie[];

  private _completeSeries: ISerie[];
  private _currentSerie: ISerie = null;
  private _cacheInitLength: number = 10;
  private _cacheMoreLength: number = 4;
  private _numberOfItemsInCache = this._cacheInitLength;

  // Instantiation of masonry's component "monMacon" declared in the template into the controller
  @ViewChild('myMasonry') private monMacon;

  public myOptions: MasonryOptions = {
    transitionDuration: '0s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true,
  };

  constructor(private _dataService: DataService,
              private _route: ActivatedRoute,
              private _router: Router) {
    console.log(">>> Creating ScrollableContentComponent")
  }

  ngOnInit() {
    if (!this._completeSeries) {
      console.log(">>> Fetching Data")
      this._dataService.getData()
        .do(series => this.displayedSeries = series.slice(0, this._cacheInitLength)).subscribe(series => this._completeSeries = series);
    }
    console.log(">>> Configuring the router")
    this._route.params
      .map(params => params["id"])
      .do(id => console.log("id ", id))
      .do(id => {
        if (id != "latest") {
          let serieToDisplay = this._completeSeries.find(serie => serie.title === id);
          console.log("serieToDisplay ", serieToDisplay);
          this.displayedSeries = serieToDisplay.assets.map(asset => {
            return {
              assets: [asset],
              title: serieToDisplay.title,
              artist: serieToDisplay.artist
            }
          })
        }
      })
      .subscribe();
  }

  public onScroll(): void {
    const newData = this._completeSeries.slice(this._numberOfItemsInCache, this._numberOfItemsInCache + this._cacheMoreLength);
    this.displayedSeries.splice(this.displayedSeries.length, 0, ...newData);
    this._numberOfItemsInCache += this._cacheMoreLength;
  }

  public onBrickClick(brickID: number): void {
    this._router.navigate(["/series/" + this.displayedSeries[brickID].title]);
  }

  /**
   * Force the redraw of Masonry
   */
  public masonryRedraw() {
    this.monMacon.layout();
  }

}
