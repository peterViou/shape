import {Component, OnInit, ViewChild} from '@angular/core';
import Player from "@vimeo/player";
// import {Component, ViewChild} from '@angular/core';
// import {NavController} from "ionic-angular/index";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('player_container') playerContainer;
  private player: Player;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.player = new Player(this.playerContainer.nativeElement, {
      id: 19231868,
      autoplay:true,
      byline:false
    });
  }

}
