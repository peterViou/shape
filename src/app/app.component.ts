import {Component, OnInit} from "@angular/core";
import {DataService} from "./component/datas/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  constructor(private _dataService: DataService) {
  }

  ngOnInit(): void {
    // console.log(">>> Fetching Data from APP")

    // this._dataService.getData().subscribe(result =>
    //  let resulte = result;
  }
}
