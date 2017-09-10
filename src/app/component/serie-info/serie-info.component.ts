import {Component, OnInit} from '@angular/core';
import {ISerie} from "../datas/iserie";
import {SimpleDataService} from "../datas/simple-data.service";

@Component({
  selector: 'app-serie-info',
  templateUrl: './serie-info.component.html',
  styleUrls: ['./serie-info.component.scss']
})
export class SerieInfoComponent implements OnInit {

  currentSerie: ISerie = null;

  constructor(private _simpleData: SimpleDataService) {
  }

  ngOnInit() {
    // this.currentSerie.title = "Tobias";
    this.currentSerie = this._simpleData.serieToDisplay;
    console.log("this.currentSerie : ", this.currentSerie);
    console.log("this.currentSerie.title : ", this.currentSerie.title);
  }

}
