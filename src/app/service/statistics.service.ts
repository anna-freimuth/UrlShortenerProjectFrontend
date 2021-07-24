import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Statistic} from "../model/statistic";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private getAllPath:string=`${environment.backend}/statistics`;
  constructor(private http: HttpClient) { }

  getStatistics(): Observable<Statistic[]>{
    return this.http.get<Statistic[]>(this.getAllPath);
  }
}
