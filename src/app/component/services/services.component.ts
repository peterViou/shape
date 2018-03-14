import { Component, OnInit } from '@angular/core';
import {SimpleDataService} from "../../services/datas/simple-data.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(              private _simpleData: SimpleDataService,
  ) { }

  ngOnInit() {
    console.log("services latest : ", this._simpleData.toutesmesseries)
  }

  ngOnDestroy() {
    console.log('Services Destroyed');
  }

}
