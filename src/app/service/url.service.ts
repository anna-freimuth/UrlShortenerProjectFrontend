import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Model} from "../model/model";
import {Observable} from "rxjs";
import {ShortUrl} from "../model/short-url";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private addPath:string=`${environment.backend}/url`;
  constructor(private http: HttpClient) { }

  addUrl(model : Model):Observable<ShortUrl>{
    return this.http.post<ShortUrl>(this.addPath, model);
  }
}
