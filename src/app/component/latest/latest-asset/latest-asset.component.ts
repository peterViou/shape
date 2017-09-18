import {Component, Input, OnInit} from '@angular/core';
import {ISerie} from "../../../services/datas/iserie";
import {IAsset} from "../../../services/datas/iasset";

@Component({
  selector: 'app-latest-asset',
  templateUrl: './latest-asset.component.html',
  styleUrls: ['./latest-asset.component.scss']
})
export class LatestAsset implements OnInit {
  @Input() serie: ISerie;
  public firstItem: IAsset;
  _isLoaded: boolean;

  ngOnInit(): void {
    this._isLoaded = false;
    this.firstItem = this.serie.assets[0];
  }

  checkLoaded(): void {
    this._isLoaded = true;
  };
}
