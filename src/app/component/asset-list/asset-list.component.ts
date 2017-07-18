import {Component, OnInit, ViewChild} from "@angular/core";
import {ISerie} from "../latest-list/iserie";
import {MasonryOptions} from "angular2-masonry";
import {DataService} from "../latest-list/data.service";

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class SerieViewerComponent implements OnInit {

  public displayedAssets: ISerie[];
  public myOptions: MasonryOptions = {
    transitionDuration: '0s',
    resize: true,
    hiddenStyle: {opacity: 0},
    fitWidth: true,
  };


  @ViewChild('myMasonry') private _masonryInstance; // _masonryInstance : Variable linked to masonry's component instantiated in the template

  constructor(private _dataService: DataService) {
    console.log(">>> Creating ScrollableContentComponent")
  }

  ngOnInit() {

    const serieToDisplay = this._dataService.serieToDisplay;
    this.displayedAssets = serieToDisplay.assets.map(asset => {
      return {
        assets: [asset],
        title: serieToDisplay.title,
        artist: serieToDisplay.artist
      }
    })
  }


  public onBrickClick(serieID: number): void {
   // TODO
  }

  /**
   * Force the redraw of Masonry
   */
  public masonryRedraw() {
    this._masonryInstance.layout();
  }


}
