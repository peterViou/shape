import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import {ISerie} from "./iserie";
import 'rxjs/Rx';

@Injectable()
export class SimpleDataService {

  public serieToDisplay: ISerie = null;
  // public serieToDisplayID: number = null;
  private _latest: Observable<any> = null;

  constructor(private _http: Http) {
  }

  clearCache() {
    this._latest = null;
  }

  static formatData(mySeries: ISerie[]): ISerie[] {
    console.log(">>> FORMAT DATA ", mySeries);
    mySeries
      .map(result => {
        result.assets.forEach(asset => {
          asset.thumbnail = "http://www.shape-production.fr/photos/" + asset.thumbnail;
        });
        return result;
      });
    return mySeries
  }

  public getSeries() {
    if (!this._latest) {
      this._latest = this._http.get("./assets/dataShape.json")
        .map((res: Response) => res.json())
        .do(latest => SimpleDataService.formatData(latest))
        .publishReplay(1)
        .refCount();
    }
    // console.log("_latest : ",this._latest)
    return this._latest;
  }

  // public getLatestRange(range) {
  //   console.log('getLatestRange', range);
  // }
  //
  // public getSerie(id) {
  //   console.log('getSerie', id);
  // }
  //
  // public getSerieType(id) {
  //   // Single Image
  //   // Several Images
  //   // Single Video
  //   // Several Images
  //   // Mix
  //
  //   console.log('getSerieType', id);
  // }
  //
  // public getSerieThumbnail(id) {
  //   console.log('getSerieThumbnail', id);
  // }
}
