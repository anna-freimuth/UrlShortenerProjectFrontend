import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {StatisticsComponent} from "./pages/statistics/statistics.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'statistic', component: StatisticsComponent},
  {path:'', redirectTo: 'home',pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
