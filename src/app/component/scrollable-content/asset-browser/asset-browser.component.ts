import {Component, Input, OnInit} from '@angular/core';
import {IAsset} from "../../../iasset";

@Component({
  selector: 'app-asset-browser',
  templateUrl: './asset-browser.component.html',
  styleUrls: ['./asset-browser.component.scss']
})
export class AssetBrowser implements OnInit {
  @Input() serie;
  firstAsset: IAsset;
  _isLoaded: boolean ;

  loadedImages: number = 0;

  ngOnInit(): void {
    this._isLoaded = false;
    this.firstAsset = this.serie.assets[0];
  }



  checkLoaded():void {
    this._isLoaded = true;
    // console.log("L'image de la série : " + this.asset-browser.title + " est loadée");
  };


}
