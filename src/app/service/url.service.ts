import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Model} from "../model/model";
import {Observable} from "rxjs";
import {ShortUrl} from "../model/short-url";

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private addPath:string='http://localhost:8080/url';
  constructor(private http: HttpClient) { }

  addUrl(model : Model):Observable<ShortUrl>{
    return this.http.post<ShortUrl>(this.addPath, model);
  }
}
