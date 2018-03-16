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
    console.log("Enter Photographer");
    // this.subscription = this._simpleData
    //   .getClients()
    //   .subscribe(res => this.clients = res,
    //     error => console.log(error));
    // console.log("clients : ",this.clients);

    this._simpleData.getPhotographers().subscribe(
      (data) => {
        this.photographers = data;
        // this.photographers.filter(photographers => photographers.lastname )
      }
    );
  }

}
