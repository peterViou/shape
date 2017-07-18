import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MasonryModule} from 'angular2-masonry';
import {AppComponent} from './app.component';
import {Asset} from './component/scrollable-content/asset/asset.component';
import {HeaderComponent} from './component/header/header.component';
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {HttpModule, JsonpModule} from "@angular/http";
import { ModalAssetComponent } from './component/modal-asset/modal-asset.component';
import { InstagramComponent } from './component/instagram/instagram.component';
import { ScrollableContentComponent } from './component/scrollable-content/scrollable-content.component';
import {RouterModule, Routes} from "@angular/router";
import { SerieViewerComponent } from './component/serie-viewer/serie-viewer.component';
import {DataService} from "./component/scrollable-content/data.service";

const appRoutes: Routes = [
  { path: '',  component: ScrollableContentComponent },
  { path: 'series/:id',  component: SerieViewerComponent },
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

  ],
  imports: [
    BrowserModule,
    MasonryModule,
    InfiniteScrollModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    JsonpModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
