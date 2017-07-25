import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {DataService} from "../latest-list/data.service";
import {Lightbox} from 'angular2-lightbox';
import {IAsset} from "../latest-list/iasset";

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class SerieViewerComponent implements OnInit {

  public displayedAssets: IAsset[];
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
  }


  public onAssetClick(assetID: number): void {
    console.log("assetID : " + assetID);

    // this._lightbox.open(this.bigImages, assetID);
    // TODO
  }

  /**
   * Force the redraw of Masonry
   */
  public masonryRedraw() {
    this._masonryInstance.layout();
  }

}
