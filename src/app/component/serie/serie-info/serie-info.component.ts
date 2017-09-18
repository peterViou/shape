import {Component, Input} from '@angular/core';
import {ISerie} from "../../../services/datas/iserie";

@Component({
  selector: 'app-serie-info',
  templateUrl: './serie-info.component.html',
  styleUrls: ['./serie-info.component.scss']
})
export class SerieInfoComponent {
  @Input() currentSerie: ISerie;

  constructor() {
  }
}
