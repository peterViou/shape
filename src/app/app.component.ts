import {Component, OnInit} from "@angular/core";
import {SimpleDataService} from "./services/datas/simple-data.service";
import * as jQuery from "jquery";
declare var jQuery: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  constructor( private _simpleDataService:SimpleDataService) {
  }

  ngOnInit(): void {
  }
}
