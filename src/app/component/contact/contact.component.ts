import {Component, OnInit, ViewChild} from '@angular/core';
import {Lightbox} from 'angular2-lightbox';
import {ISerie} from "../../services/datas/iserie";
import {SimpleDataService} from "../../services/datas/simple-data.service";
import {IAlbum} from "../../services/datas/ialbum";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public LBOptions: Object = {};
  public currentSerie: ISerie;

  @ViewChild('player_container') playerContainer;

  constructor(private _simpleData: SimpleDataService,
              private _lightbox: Lightbox) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  public onAssetClick(assetID: number): void {
    console.log("clicocococo");
    let test:IAlbum;
    test.caption = 'href="https://vimeo.com/83897470';
    let testArray:IAlbum[];
    testArray.push(test);
    // this._lightbox.open(this._simpleData.getLightBoxAlbumFromSerie(this.currentSerie), assetID, this.LBOptions);
    this._lightbox.open(testArray, assetID, this.LBOptions);
  }

}
