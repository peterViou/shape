import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {Lightbox} from 'angular2-lightbox';
import {IAsset} from "../datas/iasset";
import {SimpleDataService} from "../datas/simple-data.service";

import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ISerie} from "../datas/iserie";


export interface IAlbum {
  src: string;
  caption?: string;
  thumb: string;
}

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})

export class SerieComponent implements OnInit {

  private _sub: any;
  public displayedAssets: IAsset[];
  public displayedAlbum: IAlbum[];

  public myOptions: MasonryOptions = {
    transitionDuration: '0s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true
  };

  @ViewChild('myMasonry2') private _masonryInstance; // _masonryInstance : Variable linked to masonry's component instantiated in the template

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _simpleData: SimpleDataService,
              private _lightbox: Lightbox) {
  }

  ngOnInit() {
    this._sub = this._route.paramMap
      .switchMap((params: ParamMap) => this._simpleData.getSerieByID(+params.get('id')))
      .subscribe(serie => this.handleComplete(serie));
  }

  private handleComplete(s: ISerie): void {
    this.displayedAssets = s.assets;
    this.displayedAlbum = this.displayedAssets.map(serie => {
      return {
        src: serie.thumbnail,
        caption: serie.thumbnail,
        thumb: serie.thumbnail
      }
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  public onAssetClick(assetID: number): void {
    console.log("assetID : " + assetID);
    this._lightbox.open(this.displayedAlbum, assetID);
  }

  /**
   * Force the redraw of Masonry
   */
  public masonryRedraw() {
    this._masonryInstance.layout();
  }

}
