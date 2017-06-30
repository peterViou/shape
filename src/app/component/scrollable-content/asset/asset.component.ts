import {Component, Input, OnInit} from '@angular/core';
import {IAsset} from "../iasset";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class Asset implements OnInit {
  @Input() brickData;
  firstAsset: IAsset;
  _isLoaded: boolean ;

  ngOnInit(): void {
    this._isLoaded = false;
    this.firstAsset = this.brickData.assets[0];
  }

  checkLoaded():void {
    this._isLoaded = true;
  };
}
