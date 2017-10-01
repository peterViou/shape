import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
_isInit:boolean = false;
isHotdogOpened:boolean = false;
  constructor() { }

  ngOnInit():boolean {
    this._isInit = true;
    return this._isInit;
  }

  toggleHotdog() {
    this.isHotdogOpened = !this.isHotdogOpened;
    console.log("changement d'état du hotdog !",this.isHotdogOpened)
  }
}
