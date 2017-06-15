import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MasonryModule} from 'angular2-masonry';
import {AppComponent} from './app.component';
import {ArticleComponent} from './component/article/article.component';
import {HeaderComponent} from './component/header/header.component';
import {InfiniteScrollModule} from "angular2-infinite-scroll";
// import {FlickityModule} from "ngx-flickity";
// import {VirtualScrollModule} from "angular2-virtual-scroll";
import { ListItemComponent } from './component/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HeaderComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    MasonryModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
