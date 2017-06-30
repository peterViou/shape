import {Component, Input, OnInit} from '@angular/core';
import {IAsset} from "../iasset";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class Asset implements OnInit {
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
    // console.log("L'image de la série : " + this.asset.title + " est loadée");
  };


}
