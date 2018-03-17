import {Component, Input, OnInit} from '@angular/core';
import {IClient} from "../../services/datas/iclient";
import {SimpleDataService} from "../../services/datas/simple-data.service";
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],

})

export class ClientsComponent implements OnInit {
  @Input() clients: IClient[];
  @Input() magazines: IClient[];
  subscription;
  constructor(private _simpleData: SimpleDataService) { }

  ngOnInit() {

    this._simpleData.getClients().subscribe(
      (data) => {
        this.clients = data;
      }
    );

    this._simpleData.getMagazines().subscribe(
      (data) => {
        this.magazines = data;
      }
    )

  }

}
