import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent   implements OnInit{
  @Input() serie;

  ngOnInit(): void {
    if (this.serie.assets.length < 2){
      console.log("La série : " + this.serie.title + " n'a qu'une seule image" )
    }
    // throw new Error("Method not implemented.");
  }

  constructor() {
  }



}
