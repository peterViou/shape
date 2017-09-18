import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MasonryModule} from 'angular2-masonry';
import {AppComponent} from './app.component';
import {LatestAsset} from './component/latest/latest-asset/latest-asset.component';
import {HeaderComponent} from './component/header/header.component';
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {HttpModule, JsonpModule} from "@angular/http";
import {InstagramComponent} from './component/instagram/instagram.component';
import {LatestComponent} from './component/latest/latest.component';
import {SerieComponent} from './component/serie/serie.component';
import {LightboxModule} from 'angular2-lightbox';
import {SerieAssetComponent} from './component/serie/serie-asset/serie-asset.component';
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {ServicesComponent} from './component/services/services.component';
import {ContactComponent} from './component/contact/contact.component';
import {ClientsComponent} from './component/clients/clients.component';
import {SimpleDataService} from "app/services/datas/simple-data.service";
import { AppRoutingModule } from './app-routing.module';
import { SerieInfoComponent } from './component/serie-info/serie-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestAsset,
    HeaderComponent,
    InstagramComponent,
    LatestComponent,
    SerieComponent,
    SerieAssetComponent,
    PageNotFoundComponent,
    ServicesComponent,
    ContactComponent,
    ClientsComponent,
    SerieInfoComponent
  ],
  imports: [
    BrowserModule,
    MasonryModule,
    InfiniteScrollModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    LightboxModule
  ],
  providers: [
    SimpleDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
