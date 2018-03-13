import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {ISerie} from "../../services/datas/iserie";
import {ActivatedRoute, Router} from "@angular/router";
import {SimpleDataService} from "../../services/datas/simple-data.service";
import {Lightbox} from 'angular2-lightbox';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit {

  public displayedSeries: ISerie[];

  public myOptions: MasonryOptions;

  latest: ISerie[] = null;
  subscription;

  numberOfSeries: number;

  // private _fetchedSeries: ISerie[] = null;
  // private _hasBeenFormated: boolean;
  // private _cacheInitLength: number = 10; // should depend of the window widths
  // private _cacheMoreLength: number = 4; // should depend of the window widths
  // private _numberOfItemsInCache = this._dataService.displayedLengthInit;
  // _masonryInstance : Variable linked to masonry's component instantiated in the template
  @ViewChild('myMasonry') private _masonryInstance;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _simpleData: SimpleDataService,
              private _lightbox: Lightbox) {
  }

  ngOnInit() {
    if (this.latest == null) {
      this._simpleData.getSeries().subscribe(res => {
        this.latest = res;
      });
    }
    this.myOptions = this._simpleData.masonryOptions;
    // this.subscription = this._simpleData
    //   .getSeries()
    //   .subscribe(res => this.latest = res,
    //     error => console.log(error));

    // this.displayedSeries = this._dataService.fetchedDatas.slice(0, this._cacheInitLength);
    // console.log("displayedSeries : ",this._dataService.displayedDatas);
    // console.log('_hasBeenFormated : ', this._hasBeenFormated);
// this._dataService.fetchedDatas.do(series =>
//         this.displayedSeries = series
//           .slice(0, this._cacheInitLength))

    // console.log('_hasBeenFormated : ', this._hasBeenFormated);
    // Fetch the data only the first time
    // if (!this._hasBeenFormated) {
    //   this._hasBeenFormated = true;
    // console.log('_hasBeenFormated : ', this._hasBeenFormated);

    // this._dataService.getData()
    //   .do(series =>
    //     this.displayedSeries = series
    //       .slice(0, this._cacheInitLength))
    //   .subscribe(series =>
    //     this._fetchedSeries = this._dataService.formatData(series));
    // }
    // else {
    //   console.log("do nothing");
    // }
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  //   console.log('Destroyed');
  // }

  public onScroll(): void {
    //TODO : refaire le buffer de display et activer à nouveau l'infinite Scroll
    // const newData = this._fetchedSeries.slice(this._numberOfItemsInCache, this._numberOfItemsInCache + this._cacheMoreLength);
    // this.displayedSeries.splice(this.displayedSeries.length, 0, ...newData);
    // this._numberOfItemsInCache += this._cacheMoreLength;
  }

  public onSerieClick(masonryID: number): void {
    // console.log("masonryID : ", masonryID);

    // let serieID: number;
    // this._simpleData.getSeries()
    //   .subscribe(res => {
    //     serieID = res[masonryID].id;
    //     console.log('serieID', serieID);
    //   });
    //
    //
    // let serieID2: number;
    // this._simpleData.getSerieIDbymasonryID(masonryID)
    //   .subscribe(res => {
    //     serieID2 = res;
    //     console.log("serieID2 : ", serieID2);
    //   });


    // let serieID3: number;
    // serieID3 = this.latest[masonryID].id;
    this._router.navigate(['/series/' + this.latest[masonryID].id]);

    // console.log("serieID : ", serieID);

    // let maSerie: ISerie;
    // this._simpleData.getSerieByID(serieID)
    //   .subscribe(data => {
    //     maSerie = data;
    //     console.log('maSerie', maSerie);
    //   });

    // this._simpleData.currentSerie = this.latest[serieID];
    // console.log("this.latest[serieID].title: ", this.latest[serieID].id)


    // if (this.latest[serieID].assets.length > 1) {
    //   this._router.navigate(['/series/' + this.latest[serieID].id]);
    // }
    // else {
    //   this.displayedAlbum = this.latest[serieID].assets.map(serie => {
    //     return {
    //       src: serie.big,
    //       caption: "",
    //       thumb: serie.thumbnail
    //     }
    //   });


    // console.log("Il n'y a qu'un asset")
    // this._lightbox.open(this.displayedAlbum, 0);
    //todo : débuguer removechild de masonry ???


  }

  /**
   * Force the redraw of Masonry
   */
  public masonryRedraw() {
    // console.log('complete series = ' + this._completeSeries);
    this._masonryInstance.layout();
  }

}
