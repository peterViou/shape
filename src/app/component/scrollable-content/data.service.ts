import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of"; //proper way to import the 'of' operator
import "rxjs/add/operator/share";
import "rxjs/add/operator/map";
import {ISerie} from "./iserie";


@Injectable()
export class DataService {
  private url: string = "./assets/data.json";
  private _data: ISerie[];
  private observable: Observable<ISerie[]>;

  constructor(private http: Http) {
  }

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
      this.observable = this.http.get(this.url, {
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
