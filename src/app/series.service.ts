import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  Response
} from '@angular/http';
import {
  Observable,
  Subject
} from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx
import 'rxjs/add/operator/toPromise';
import {ISerie} from "./iserie";

@Injectable()
export class SeriesService {
  private jsonFileURL: string = "./assets/data.json";

  constructor(private http: Http) {
  }

  getSeries(): Observable<ISerie[]> {
    return this.http.get(this.jsonFileURL).map((response: Response) => {
      return <ISerie[] > response.json()
    }).catch(this.handleError);
  }

  private handleError(errorResponse: Response) {
    console.log(errorResponse.statusText);
    return Observable.throw(errorResponse.json().error || "Server error");
  }

}
