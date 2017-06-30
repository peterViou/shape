import {Component, OnInit, ViewChild} from '@angular/core';
import {MasonryOptions} from "angular2-masonry";
import {SeriesService} from "./series.service";
import {ISerie} from "./iserie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {  }


}
