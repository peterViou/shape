import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MasonryModule} from 'angular2-masonry';
import {AppComponent} from './app.component';
import {AssetBrowser} from './component/scrollable-content/asset-browser/asset-browser.component';
import {HeaderComponent} from './component/header/header.component';
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {HttpModule, JsonpModule} from "@angular/http";

import {GalleryConfig, GalleryModule} from 'ng-gallery';
import { ModalAssetComponent } from './component/modal-asset/modal-asset.component';
import { InstagramComponent } from './component/instagram/instagram.component';
import { ScrollableContentComponent } from './component/scrollable-content/scrollable-content.component';

// import {FlickityModule} from "ngx-flickity";
// import {VirtualScrollModule} from "angular2-virtual-scroll";

export const galleryConfig : GalleryConfig = {
  // ...
}

@NgModule({
  declarations: [
    AppComponent,
    AssetBrowser,
    HeaderComponent,
    ModalAssetComponent,
    InstagramComponent,
    ScrollableContentComponent,

  ],
  imports: [
    BrowserModule,
    MasonryModule,
    InfiniteScrollModule,
    HttpModule,
    JsonpModule,
    GalleryModule.forRoot(galleryConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
