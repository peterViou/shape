import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {DataService} from "../datas/data.service";
import {Lightbox} from 'angular2-lightbox';
import {IAsset} from "../datas/iasset";

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

  public displayedAssets: IAsset[];
  public displayedAlbum: IAlbum[];
  public myOptions: MasonryOptions = {
    transitionDuration: '0s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true,
  };

  @ViewChild('myMasonry2') private _masonryInstance; // _masonryInstance : Variable linked to masonry's component instantiated in the template

  constructor(private _dataService: DataService, private _lightbox: Lightbox) {
    console.log(">>> Creating SERIE VIEWER")
  }

  ngOnInit() {
    const serieToDisplay = this._dataService.serieToDisplay;
    this.displayedAssets = serieToDisplay.assets;
    this.displayedAlbum = this.displayedAssets.map(album => {
      return {
        src : album.thumbnail,
        caption: album.thumbnail,
        thumb: album.thumbnail
      }
    });
    console.log("displayedAlbum : " + this.displayedAlbum[0].src);
  }


  public onAssetClick(assetID: number): void {
    console.log("assetID : " + assetID);

    this._lightbox.open(this.displayedAlbum, assetID);
    // TODO
  }

  /**
   * Force the redraw of Masonry
   */
  public masonryRedraw() {
    this._masonryInstance.layout();
  }

}
