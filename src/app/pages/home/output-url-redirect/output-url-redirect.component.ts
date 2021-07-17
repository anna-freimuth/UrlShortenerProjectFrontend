import {Component, Input, OnInit} from '@angular/core';
import {LongUrl} from "../../../model/long-url";

@Component({
  selector: 'app-output-url-redirect',
  templateUrl: './output-url-redirect.component.html',
  styleUrls: ['./output-url-redirect.component.css']
})
export class OutputUrlRedirectComponent implements OnInit {

  @Input()
  longUrl: LongUrl | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  navigateByUrl(shortUrl: string) {
    window.location.href = shortUrl;
  }
}
