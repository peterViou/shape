import {Component, Input, OnInit} from '@angular/core';
import {ISerie} from "../iserie";
import {IAsset} from "../iasset";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class Asset implements OnInit {
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
