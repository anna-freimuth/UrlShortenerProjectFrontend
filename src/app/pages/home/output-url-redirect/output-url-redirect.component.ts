import {Component, Input, OnInit} from '@angular/core';
import {ShortUrl} from "../../../model/short-url";

@Component({
  selector: 'app-output-url-redirect',
  templateUrl: './output-url-redirect.component.html',
  styleUrls: ['./output-url-redirect.component.css']
})
export class OutputUrlRedirectComponent implements OnInit {

  @Input()
  shortUrl: ShortUrl | undefined;

  ngOnInit(): void {
  }

  navigateByUrl(shortUrl: string) {
    window.location.href = shortUrl;
  }

}
