import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {StatisticsComponent} from './pages/statistics/statistics.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {InputUrlFormComponent} from './pages/home/input-url-form/input-url-form.component';
import {OutputUrlRedirectComponent} from './pages/home/output-url-redirect/output-url-redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticsComponent,
    InputUrlFormComponent,
    OutputUrlRedirectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
