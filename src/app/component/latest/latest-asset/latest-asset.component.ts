import {Component, Input, OnInit} from '@angular/core';
import {IAsset} from "../../../services/datas/iasset";
import {SimpleDataService} from "../../../services/datas/simple-data.service";
import {ISerie} from "../../../services/datas/iserie";

@Component({
  selector: 'app-latest-asset',
  templateUrl: './latest-asset.component.html',
  styleUrls: ['./latest-asset.component.scss']
})
export class LatestAsset implements OnInit {

  private _currentSerieID : number;

  isLoaded: boolean;

  @Input() serieID: number;
  currentSerie : ISerie;
  firstItem: IAsset;


  constructor(private _simpleData: SimpleDataService) {
  }

  ngOnInit(): void {
    // console.log("serieID depuis masonry : ",this.serieID);
    this.isLoaded = false;
    this._simpleData.getSerieIDbymasonryID(this.serieID)
      .subscribe(res => {
        this._currentSerieID = res;
        this._simpleData.getSerieByID(this._currentSerieID)
          .subscribe(res => {
            this.currentSerie = res;
            this.firstItem = this.currentSerie.assets[0];
          });
      });
  }

  checkLoaded(): void {
    this.isLoaded = true;
  };
}
