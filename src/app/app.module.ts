import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {StatisticsComponent} from './pages/statistics/statistics.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {InputUrlFormComponent} from './pages/home/input-url-form/input-url-form.component';
import {OutputUrlRedirectComponent} from './pages/home/output-url-redirect/output-url-redirect.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StatisticItemComponent } from './pages/statistics/statistic-item/statistic-item.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticsComponent,
    InputUrlFormComponent,
    OutputUrlRedirectComponent,
    StatisticItemComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
