import {Component, Input} from '@angular/core';
import {Statistic} from "../../../model/statistic";
import {environment} from "../../../../environments/environment";
import {ClipboardService} from "ngx-clipboard";

@Component({
  selector: '[app-statistic-item]',
  templateUrl: './statistic-item.component.html',
  styleUrls: ['./statistic-item.component.css']
})
export class StatisticItemComponent {
  @Input()
  statistic!: Statistic;
  backend: string = environment.backend;

  isCopy = false;

  constructor(private clipboardService: ClipboardService) {
  }

// npm i ngx-clipboard
  copy() {
    if (!this.statistic)
      return;

    this.clipboardService.copy(`${this.backend}/${(this.statistic.shortUrl)}`)
    this.isCopy = true;

    setTimeout(() => {
      this.isCopy = false;
    }, 3000);
  }

  goToLink() {
    if (!this.statistic)
      return;

    window.open(`${this.backend}/${(this.statistic.shortUrl)}`, "_blank")
  }
}
