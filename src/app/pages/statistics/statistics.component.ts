import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {

  constructor() {
  }

  top: { longUrl: string, shortUrl: string, amount: number }[] = [];

  ngOnInit(): void {
    this.top = [];
    this.top.push({longUrl: 'www.google.com', shortUrl: 'http://localhost:8080/gr', amount: 5},
      {longUrl: 'www.yahoo.com', shortUrl: 'http://localhost:8080/ds', amount: 10},
      {longUrl: 'www.news.com', shortUrl: 'http://localhost:8080/sr', amount: 100})
  }

}
