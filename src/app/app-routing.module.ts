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
  {path: '', redirectTo: '/latest', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
