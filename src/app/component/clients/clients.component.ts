import {Component, Input, OnInit} from '@angular/core';
import {IClient} from "../../services/datas/iclient";
import {SimpleDataService} from "../../services/datas/simple-data.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  @Input() clients: IClient[];
  @Input() magazines: IClient[];
  subscription;
  constructor(private _simpleData: SimpleDataService) { }

  ngOnInit() {
    console.log("Test de gros champion...");
    // this.subscription = this._simpleData
    //   .getClients()
    //   .subscribe(res => this.clients = res,
    //     error => console.log(error));
    // console.log("clients : ",this.clients);

    this._simpleData.getClients().subscribe(
      (data) => {
        this.clients = data; // WORKS AND ALWAYS UP TO DATE
        // console.log("clients : ", data); // ONLY WORKS ONCE
      }
    );

    this._simpleData.getMagazines().subscribe(
      (data) => {
        this.magazines = data; // WORKS AND ALWAYS UP TO DATE
        // console.log("magazines : ",data); // ONLY WORKS ONCE
      }
    )

  }

}
