import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxMasonryModule } from 'ngx-masonry';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WorkCardComponent } from './work-card/work-card.component';
import { HomeComponent } from './home/home.component';
import {ROUTING} from './app.routing';
import { WorkMasonryCardComponent } from './work-card/work-masonry-card/work-masonry-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WorkCardComponent,
    HomeComponent,
    WorkMasonryCardComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    NgxMasonryModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
