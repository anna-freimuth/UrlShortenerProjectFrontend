import { Component, OnInit } from '@angular/core';
import {ShortUrl} from "../../model/short-url";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  longUrl: ShortUrl | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setLongUrl(longUrl: ShortUrl) {

    this.longUrl = longUrl;
  }

}
