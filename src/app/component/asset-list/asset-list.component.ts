import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {DataService} from "../latest-list/data.service";
import {Lightbox} from 'angular2-lightbox';
import {IAsset} from "../latest-list/iasset";

export interface IAlbum {
  src: string;
  caption?: string;
  thumb: string;
}

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class SerieViewerComponent implements OnInit {


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
    console.log(">>> Creating ScrollableContentComponent")
  }

  ngOnInit() {
    const serieToDisplay = this._dataService.serieToDisplay;
    this.displayedAssets = serieToDisplay.assets;

    this.displayedAlbum = this.displayedAssets.map(album => {
      return {
        // assets: [album],
        src : album.thumbnail,
        caption: album.thumbnail,
        thumb: album.thumbnail
      }
    })

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
