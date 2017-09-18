import {Component, Input, OnInit} from '@angular/core';
import {IAsset} from "../../../services/datas/iasset";

@Component({
  selector: 'app-serie-asset',
  templateUrl: './serie-asset.component.html',
  styleUrls: ['./serie-asset.component.scss']
})
export class SerieAssetComponent implements OnInit {
  @Input() asset:IAsset;
  isLoaded: boolean ;

  ngOnInit(): void {
    this.isLoaded = false;
  }

  checkLoaded():void {
    this.isLoaded = true;
  };
}
