import {Component, Input} from '@angular/core';
import {Statistic} from "../../../model/statistic";
import {environment} from "../../../../environments/environment";

@Component({
  selector: '[app-statistic-item]',
  templateUrl: './statistic-item.component.html',
  styleUrls: ['./statistic-item.component.css']
})
export class StatisticItemComponent {
  @Input()
  statistic!: Statistic;
  backend: string = environment.backend;
}
