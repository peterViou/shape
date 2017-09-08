import {Component, Input, OnInit} from '@angular/core';
import {ISerie} from "../iserie";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class Asset implements OnInit {
  url:string = "http://www.shape-production.fr/photos/"
  @Input() serie:ISerie;
  _isLoaded: boolean ;

  ngOnInit(): void {
    this._isLoaded = false;
  }

  checkLoaded():void {
    this._isLoaded = true;
  };
}
