import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgxMasonryModule} from 'ngx-masonry';
import {SlickModule} from 'ngx-slick';


import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {WorkCardComponent} from './components/work-card/work-card.component';
import {HomeComponent} from './pages/home/home.component';
import {ROUTING} from './app.routing';
import {WorkMasonryCardComponent} from './components/work-card/work-masonry-card/work-masonry-card.component';
import {HeroComponent} from './components/hero/hero.component';
import {TestimonialComponent} from './components/testimonial/testimonial.component';


@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        WorkCardComponent,
        HomeComponent,
        WorkMasonryCardComponent,
        HeroComponent,
        TestimonialComponent
    ],
    imports: [
        BrowserModule,
        AngularFontAwesomeModule,
        NgxMasonryModule,
        SlickModule.forRoot(),
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
