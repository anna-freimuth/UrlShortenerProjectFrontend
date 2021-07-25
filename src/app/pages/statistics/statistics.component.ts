import {Component, OnDestroy, OnInit} from '@angular/core';
import {StatisticsService} from "../../service/statistics.service";
import {Statistic} from "../../model/statistic";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit, OnDestroy {
  private subscriptionsStatistic: Subscription[] = [];
  statistics: Statistic[] | undefined;
  sortBy: 'id' | 'shortUrl' | 'longUrl' | 'amount' = 'id' ;
  reverseSort :boolean= false ;

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnDestroy(): void {
    this.subscriptionsStatistic.forEach(value => value.unsubscribe());
  }

  ngOnInit(): void {
    const addSubscriptionsStatistic = this.statisticsService.getStatistics()
      .pipe(delay(2000))
      .subscribe(
      value => this.callBackOk(value), error => this.errorHandle(error));

    this.subscriptionsStatistic.push(addSubscriptionsStatistic);
  }

  private callBackOk(value: Statistic[]): void {
    this.statistics = value;
  }

  private errorHandle(error: HttpErrorResponse): void {
    console.log(error);
  }

  sort(sortBy: 'id' | 'shortUrl' | 'longUrl' | 'amount') {
    if (this.sortBy === sortBy) {
      this.reverseSort = !this.reverseSort;
    }
    this.sortBy = sortBy;
  }
}
