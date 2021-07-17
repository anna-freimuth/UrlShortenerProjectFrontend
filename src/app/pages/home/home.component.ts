import { Component, OnInit } from '@angular/core';
import {LongUrl} from "../../model/long-url";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  longUrl: LongUrl | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setLongUrl(longUrl: LongUrl) {

    this.longUrl = longUrl;
  }

}
