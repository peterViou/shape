import {Component, Input, OnInit} from '@angular/core';
import {IAsset} from "../../iasset";
import {Lightbox} from 'angular2-lightbox';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  @Input() serie;
  _albums: any[];
  firstAsset: IAsset;// = this.serie.assets[0];
  mesAssets: IAsset[];

  ngOnInit(): void {
    if (this.serie.assets.length < 2) {
      console.log("La série : " + this.serie.title + " n'a qu'une seule image")
    }
    // this.firstAsset = this.serie.assets[0];

    // throw new Error("Method not implemented.");
    this.mesAssets = this.serie.assets;
    this.firstAsset = this.mesAssets[0];

    this._albums = [];

    for (let i = 0; i < this.mesAssets.length ; i++) {
      let src = this.mesAssets[i].thumbnail;
      let caption = 'Image ' + i + ' caption here';
      let thumb = this.mesAssets[i].thumbnail;
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      // this._album.push(album);
      // this._albums.push(album);
      this._albums.push(album);
    }
  }

  constructor(private _lightbox: Lightbox) {


  }

  openI(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, 0);
    console.log("_albums : " +this._albums.length)
  }

  open(): void {
    // open lightbox
    // this._lightbox.open(this.serie.assets, 0);
    console.log("Click pas i ")

  }


}
