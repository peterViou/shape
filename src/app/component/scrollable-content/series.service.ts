import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx"; //get everything from Rx
import "rxjs/add/operator/toPromise";
import {ISerie} from "./iserie";
import {IAsset} from "./iasset";

@Injectable()
export class SeriesService {
  private _jsonFileURL: string = "./assets/data.json";
  // private _series: Observable<ISerie[]>;
  private _dataCache : ISerie[];

  errorMessage: string = "server error";

  constructor(private http: Http) {
  }

  getSeries(): Observable<ISerie[]> {
    return this.http.get(this._jsonFileURL).map((response: Response) => {
      // this._series= response.json(); // un cache bien à le Pete (cad foireux)
      return <ISerie[] > response.json()
    }).catch(this.handleError);
  }


  displayData(series: ISerie[], serieID: number) {
    let maSerie: ISerie = series[serieID];
    let monFisrtItem: IAsset = maSerie.assets[0];
    console.log("click on  " + maSerie.title + " / " + monFisrtItem.title + " / " + monFisrtItem.thumbnail);
  };

  // getBricksOfSeries(): Observable<IAsset[]> {
  getBricksOfSeries()  {
    let monCache;
    this.getSeries().subscribe(response => this._dataCache = response, error => this.errorMessage = < any > error);
    let bricks :Observable<IAsset[]>;
    console.log("nb of series = " + this._dataCache)
  //   for (var i = 0; i <= this._dataCache.length; i++) {
  //
  // }

  }

  getBricks(series: ISerie[], serieID: number): IAsset[] {
    let maSerie: ISerie = series[serieID];
    let assets: IAsset[];
    for (var i = 0; i <= maSerie.assets.length; i++) {
      assets.push(maSerie.assets[i]);
    }
    return assets;
  }

  hasThisSerieMoreThanOneAsset():Boolean{
    return true;
  }


  private handleError(errorResponse: Response) {
    console.log(errorResponse.statusText);
    return Observable.throw(errorResponse.json().error || "Server error");
  }

}
