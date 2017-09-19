import {Component, OnInit, ViewChild} from "@angular/core";
import {MasonryOptions} from "angular2-masonry";
import {Lightbox} from 'angular2-lightbox';
import {IAsset} from "../../services/datas/iasset";
import {SimpleDataService} from "../../services/datas/simple-data.service";
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ISerie} from "../../services/datas/iserie";

//TODO : add a video Player fot Vimeo

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})

export class SerieComponent implements OnInit {

  public currentSerie: ISerie;
  public displayedAssets: IAsset[];
  public myOptions: MasonryOptions;

  @ViewChild('myMasonry2') private _masonryInstance; // _masonryInstance : Variable linked to masonry's component instantiated in the template

  constructor(private _route: ActivatedRoute,
              private _simpleData: SimpleDataService,
              private _lightbox: Lightbox) {
  }

  ngOnInit() {
    this.myOptions = this._simpleData.masonryOptions;
    this._route.paramMap
      .switchMap((params: ParamMap) => this._simpleData.getSerieByID(+params.get('id')))
      .first()
      .subscribe(serie => this.handleInitComplete(serie));
  }

  private handleInitComplete(s: ISerie): void {
    this.currentSerie = s;
    this.displayedAssets = s.assets;
  }

  public onAssetClick(assetID: number): void {
    this._lightbox.open(this._simpleData.getLightBoxAlbumFromSerie(this.currentSerie), assetID);
  }

  /**
   * Force the redraw of Masonry
   */
  public masonryRedraw() {
    this._masonryInstance.layout();
  }

}
