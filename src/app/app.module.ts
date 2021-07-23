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
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { SortPipePipe } from './pages/statistics/sort-pipe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticsComponent,
    InputUrlFormComponent,
    OutputUrlRedirectComponent,
    StatisticItemComponent,
    NavbarComponent,
    LoaderComponent,
    SortPipePipe

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
