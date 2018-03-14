import {Component, OnInit} from "@angular/core";
import {SimpleDataService} from "./services/datas/simple-data.service";
import {transition, trigger} from '@angular/animations';
import {fadeOut, slideLeft, slideRight} from "./animation";

//latest services clients photographers contact
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimations', [
      transition('latest => services', slideRight),
      transition('latest => clients', slideRight),
      transition('latest => photographers', slideRight),
      transition('latest => contact', slideRight),
      transition('services => clients', slideRight),
      transition('services => photographers', slideRight),
      transition('services => contact', slideRight),
      transition('clients => photographers', slideRight),
      transition('clients => contact', slideRight),
      transition('photographers => contact', slideRight),

      transition('contact => photographers', slideLeft),
      transition('contact => clients', slideLeft),
      transition('contact => services', slideLeft),
      transition('contact => latest', slideLeft),
      transition('photographers => clients', slideLeft),
      transition('photographers => services', slideLeft),
      transition('photographers => latest', slideLeft),
      transition('clients => services', slideLeft),
      transition('clients => latest', slideLeft),
      transition('services => latest', slideLeft),

      transition('series => *', fadeOut),
      transition('latest => series', fadeOut),

    ])
  ]
})

// transition('contact => clients', slideLeft),

export class AppComponent implements OnInit {
  constructor(private _simpleDataService: SimpleDataService) {
  }


  ngOnInit(): void {
  }

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
