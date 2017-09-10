import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {Lightbox} from 'angular2-lightbox';
import {IAsset} from "../datas/iasset";
import {SimpleDataService} from "../datas/simple-data.service";

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';


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
  id: number;
  private _sub: any;
  private _serieToDisplay;

  public displayedAssets: IAsset[];
  public displayedAlbum: IAlbum[];
  public myOptions: MasonryOptions = {
    transitionDuration: '0s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true,
  };

  @ViewChild('myMasonry2') private _masonryInstance; // _masonryInstance : Variable linked to masonry's component instantiated in the template

  constructor(private _simpleData: SimpleDataService,
              private _lightbox: Lightbox,
              private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {

    // this._serieToDisplay = this._route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this._simpleData.getSerie(params.get('id')));


    // this._sub = this._route.params.subscribe(params => {
    //   this.id = +params['id']; // (+) converts string 'id' to a number
    //   console.log("this.id : ", this.id)
    //   // In a real app: dispatch action to load the details here.

      const serieToDisplay = this._simpleData.serieToDisplay;
      // console.log("serieToDisplay", serieToDisplay)

      this.displayedAssets = serieToDisplay.assets;
      this.displayedAlbum = this.displayedAssets.map(album => {
        return {
          src: album.thumbnail,
          caption: album.thumbnail,
          thumb: album.thumbnail
        }
      });


    // });


    //TODO nettoyer
    // TODO peut etre faire une methode pour la serie
    // console.log("displayedAlbum : " + this.displayedAlbum[0].src);
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
