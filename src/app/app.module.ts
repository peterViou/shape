import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MasonryModule} from 'angular2-masonry';
import {AppComponent} from './app.component';
import {Asset} from './component/latest-list/asset/asset.component';
import {HeaderComponent} from './component/header/header.component';
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {HttpModule, JsonpModule} from "@angular/http";
import { ModalAssetComponent } from './component/modal-asset/modal-asset.component';
import { InstagramComponent } from './component/instagram/instagram.component';
import { ScrollableContentComponent } from './component/latest-list/latest-list.component';
import {RouterModule, Routes} from "@angular/router";
import { SerieViewerComponent } from './component/asset-list/asset-list.component';
import {DataService} from "./component/latest-list/data.service";
import { LightboxModule } from 'angular2-lightbox';
import { SerieAssetComponent } from './component/asset-list/serie-asset/serie-asset.component';
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: 'latest',  component: ScrollableContentComponent },
  { path: 'series/:id',  component: SerieViewerComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Asset,
    HeaderComponent,
    ModalAssetComponent,
    InstagramComponent,
    ScrollableContentComponent,
    SerieViewerComponent,
    SerieAssetComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    MasonryModule,
    InfiniteScrollModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    JsonpModule,
    LightboxModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
