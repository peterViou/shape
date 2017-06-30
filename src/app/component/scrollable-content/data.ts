import {ISerie} from "./iserie";
export class Data {

  private _series: ISerie[];

  constructor(d) {
    for (var i = 1; i <= d.length; i++) {
      this._series.push(d[i]);
      console.log("mes datas : " + d);
    }

    // getSeries() {
    // return this.d;
    // }
  }
}

