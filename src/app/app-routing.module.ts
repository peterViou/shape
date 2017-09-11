import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {LatestComponent} from "./component/latest/latest.component";
import {SerieComponent} from "./component/serie/serie.component";
import {ServicesComponent} from "./component/services/services.component";
import {ClientsComponent} from "./component/clients/clients.component";
import {ContactComponent} from "./component/contact/contact.component";

const appRoutes: Routes = [
  {path: 'latest', component: LatestComponent},
  {path: 'series/:id', component: SerieComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'contact', component: ContactComponent},
  // {path: 'series', redirectTo: '/latest', pathMatch: 'prefix'}, // TODO : hack tout pourri pur contourner le fait qu'on peut pas refresh une serie sans avoir une methode dédie a fetch d'une serie et d'un gestion plus puissante de l'analyse de l'url
  {path: '', redirectTo: '/latest', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
