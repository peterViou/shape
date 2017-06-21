import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MasonryModule} from 'angular2-masonry';
import {AppComponent} from './app.component';
import {SerieComponent} from './component/serie/serie.component';
import {HeaderComponent} from './component/header/header.component';
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {HttpModule, JsonpModule} from "@angular/http";
import {LightboxModule} from 'angular2-lightbox';
// import {FlickityModule} from "ngx-flickity";
// import {VirtualScrollModule} from "angular2-virtual-scroll";

@NgModule({
  declarations: [
    AppComponent,
    SerieComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    MasonryModule,
    InfiniteScrollModule,
    HttpModule,
    JsonpModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
