import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: '[app-statistic-item]',
  templateUrl: './statistic-item.component.html',
  styleUrls: ['./statistic-item.component.css']
})
export class StatisticItemComponent implements OnInit, OnChanges {
  @Input()
  elt!: { longUrl: string; shortUrl: string; amount: number; }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
