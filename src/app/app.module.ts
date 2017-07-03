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

const appRoutes: Routes = [
  { path: '', redirectTo: "/series/latest", pathMatch: "full"},
  { path: 'series/:id',  component: ScrollableContentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    Asset,
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
    RouterModule.forRoot(appRoutes),
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
