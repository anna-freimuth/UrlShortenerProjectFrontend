import {Component, Input, OnInit} from '@angular/core';
import {ShortUrl} from "../../../model/short-url";
import {ClipboardService} from "ngx-clipboard";

@Component({
  selector: 'app-output-url-redirect',
  templateUrl: './output-url-redirect.component.html',
  styleUrls: ['./output-url-redirect.component.css'],
})
export class OutputUrlRedirectComponent implements OnInit {

  @Input()
  shortUrl!: ShortUrl ;

  isCopy = false;

  constructor(private clipboardService: ClipboardService) {
  }

  ngOnInit(): void {
  }

  navigateByUrl(shortUrl: string) {
    window.location.href = shortUrl;
  }
  copy() {
    if (!this.shortUrl)
      return;


    this.clipboardService.copy(this.shortUrl.shortUrl);
    this.isCopy = true;

    setTimeout(() => {
      this.isCopy = false;
    }, 3000);
  }

  goToLink() {
    if (!this.shortUrl)
      return;

    window.open(`${(this.shortUrl.shortUrl)}`, "_blank")
  }
}
