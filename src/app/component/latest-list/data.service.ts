import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs";
import {ISerie} from "./iserie";


@Injectable()
export class DataService {
  // private url: string = "./assets/data.json";// loremPixel
  // private url: string = "./assets/dataLocal.json";// photos locales
  private jsonURL: string = "./assets/dataShape.json";// photos shape local
  private _data: ISerie[];
  private observable: Observable<ISerie[]>;
  
  constructor(private http: Http) {
  }

  serieToDisplay:ISerie;

  getData(): Observable<ISerie[]> {
    if (this._data) {
      // if `data` is available just return it as `Observable`
      return Observable.of(this._data);
    } else if (this.observable) {
      // if `this.observable` is set then the request is in progress
      // return the `Observable` for the ongoing request
      return this.observable;
    } else {
      // example header (not necessary)
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // create the request, store the `Observable` for subsequent subscribers
      this.observable = this.http.get(this.jsonURL, {
        headers: headers
      })
        .map(response => {
          // when the cached data is available we don't need the `Observable` reference anymore
          this.observable = null;

          if (response.status == 400) {
            return;
          } else if (response.status == 200) {
            this._data = response.json();
            // this.data = new Data(response.json());
            return <ISerie[] > response.json()
          }
          // make it shared so more than one subscriber can get the result
        })
        .share();
      return this.observable;
    }
  }
}
