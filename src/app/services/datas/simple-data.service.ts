import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import {ISerie} from "./iserie";
import 'rxjs/Rx';
import {IAlbum} from "../../component/serie/serie.component";

@Injectable()
export class SimpleDataService {

  private _latest: Observable<ISerie[]> = null;
  public currentSerie: ISerie;

  constructor(private _http: Http) {
  }

  clearCache() {
    this._latest = null;
  }

  static formatData(mySeries: ISerie[]): ISerie[] {
    mySeries
      .map(result => {
        result.assets.forEach(asset => {
          asset.big = "http://www.shape-production.fr/big/" + asset.thumbnail + ".jpg";
          asset.thumbnail = "http://www.shape-production.fr/th/" + asset.thumbnail + ".jpg";
        });
        return result;
      });
    return mySeries
  }

  public getSeries(): Observable<ISerie[]> {
    if (!this._latest) {
      this._latest = this._http.get("./assets/dataShape.json")
        .map((res: Response) => res.json())
        .do(latest => SimpleDataService.formatData(latest))
        .publishReplay(1)
        .refCount();
    }
    return this._latest;
  }

  public getSerieByID(monID: number): Observable<ISerie> {
    console.log("getSerieByID : ", monID);
    return this.getSeries()
      .map(series => series.find(serie => serie.id === monID))
  }

// public getLatestRange(range) {
//   console.log('getLatestRange', range);
// }
//


  public isSerieSingle(s: ISerie): boolean {
    console.log('isSerieSingle', s.id + " " + s.title + " " + s.artist);
    return (s.assets.length > 1)
  }

  public getLightBoxAlbumFromSerie(s:ISerie) :IAlbum[]{
    return s.assets.map(serie => {
      return {
        src: serie.big,
        caption: "",
        thumb: serie.thumbnail
      }
    });
  }

//
// public getSerieThumbnail(id) {
//   console.log('getSerieThumbnail', id);
// }
}
