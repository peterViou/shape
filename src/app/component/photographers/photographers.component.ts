import {Component, Input, OnInit} from '@angular/core';
import {SimpleDataService} from "../../services/datas/simple-data.service";
import {IPhotographer} from "../../services/datas/iphotographer";

@Component({
  selector: 'app-photographers',
  templateUrl: './photographers.component.html',
  styleUrls: ['./photographers.component.scss']
})
export class PhotographersComponent implements OnInit {

  @Input() photographers: IPhotographer[];

  constructor(private _simpleData: SimpleDataService) { }

  ngOnInit() {

    this._simpleData.getPhotographers().subscribe(
      (data) => {
        this.photographers = data;
      }
    );
  }

}
