import {Component, OnInit} from '@angular/core';
import {ISerie} from "../../services/datas/iserie";
import {SimpleDataService} from "../../services/datas/simple-data.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-serie-info',
  templateUrl: './serie-info.component.html',
  styleUrls: ['./serie-info.component.scss']
})
export class SerieInfoComponent implements OnInit {

  currentSerie: ISerie;
  private _sub: any;


  constructor(private _route: ActivatedRoute,
              private _simpleData: SimpleDataService
              ) {
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  //todo : sale : il faut reccupree les infons de la serie mieux que ça

  ngOnInit() {
    this._sub = this._route.paramMap
      .switchMap((params: ParamMap) => this._simpleData.getSerieByID(+params.get('id')))
      .subscribe(serie => this.currentSerie = serie);
  }

}
