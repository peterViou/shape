import {Component, OnInit} from "@angular/core";
import {DataService} from "./services/datas/data.service";
import {SimpleDataService} from "./services/datas/simple-data.service";

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
