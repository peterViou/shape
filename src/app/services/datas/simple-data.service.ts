import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import {ISerie} from "./iserie";
import 'rxjs/Rx';
import {IAlbum} from "./ialbum";
import {MasonryOptions} from "angular2-masonry";
import {IClient} from "./iclient";
import {IPhotographer} from "./iphotographer";

@Injectable()
export class SimpleDataService {

  private _latest: Observable<ISerie[]> = null;

  private _clients: Observable<IClient[]> = null;
  private _magazines: Observable<IClient[]> = null;
  private _photographers: Observable<IPhotographer[]> = null;

  public  currentSerie: ISerie;//todo Passer de préférence en private


  public masonryOptions: MasonryOptions = {
    transitionDuration: '0s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true,
  };

  constructor(private _http: Http) {
  }

  public clearCache() {
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
      this._latest = this._http.get("./assets/datas/dataShape.json")
        .map((res: Response) => res.json())
        .do(latest => SimpleDataService.formatData(latest))
        .publishReplay(1)
        .refCount();
    }
    return this._latest;
  }

  public getSerieIDbymasonryID(masonryID: number): Observable<number> {
    // let serieID: number;
    return this._latest.map(data => data[masonryID].id)
    ;
  }

  public getClients(): Observable<IClient[]> {
    if (!this._clients) {
      console.log("chargement de ./assets/datas/clients.json")

      this._clients = this._http.get("./assets/datas/clients.json")
        .map((res: Response) => res.json())
        // .do(latest => SimpleDataService.formatData(latest))
        .publishReplay(1)
        .refCount();
    }
    return this._clients;
  }

  public getMagazines(): Observable<IClient[]> {
    if (!this._magazines) {
      console.log("chargement de ./assets/datas/magazines.json")

      this._magazines = this._http.get("./assets/datas/magazines.json")
        .map((res: Response) => res.json())
        // .do(latest => SimpleDataService.formatData(latest))
        .publishReplay(1)
        .refCount();
    }
    return this._magazines;
  }

  public getPhotographers(): Observable<IPhotographer[]> {
    if (!this._photographers) {
      console.log("chargement de ./assets/datas/photographers.json")
      this._photographers = this._http.get("./assets/datas/photographers.json")
        .map((res: Response) => res.json())
        // .do(latest => SimpleDataService.formatData(latest))
        .publishReplay(1)
        .refCount();
    }
    return this._photographers;
  }

  public getSerieByID(monID: number): Observable<ISerie> {
    // console.log("getSerieByID : ", monID);
    let maSerie: Observable<ISerie>;
    return this.getSeries()
      .map(series => series.find(serie => serie.id === monID))
  }

  public getLightBoxAlbumFromSerie(s: ISerie): IAlbum[] {
    return s.assets.map(serie => {
      return {
        src: serie.big,
        caption: "",
        thumb: serie.thumbnail
      }
    });
  }

}
