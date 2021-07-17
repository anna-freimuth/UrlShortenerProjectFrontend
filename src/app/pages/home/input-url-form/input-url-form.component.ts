import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {dateValidator} from "./dateValidator";
import {Model} from "../../../model/model";
import {UrlService} from "../../../service/url.service";
import {ShortUrl} from "../../../model/short-url";
import {HttpErrorResponse} from "@angular/common/http";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";
import {OutputUrlRedirectComponent} from "../output-url-redirect/output-url-redirect.component";

@Component({
  selector: 'app-input-url-form',
  templateUrl: './input-url-form.component.html',
  styleUrls: ['./input-url-form.component.css'],
  providers: [DatePipe]
})
export class InputUrlFormComponent implements OnInit {

  form: FormGroup | undefined;
  longUrl: ShortUrl| undefined;
  @Output()
  longUrlEvent = new EventEmitter<ShortUrl>()

  pattern = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)'

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private urlService:UrlService) {
  }

  ngOnInit(): void {
    this.formInit();

  }


  private formInit(): void {
    const date = new Date();
    date.setDate(date.getDate() + 3);


    this.form = this.fb.group({
        longUrl: [null, [Validators.required, Validators.pattern(this.pattern)]],
        date: [null, dateValidator]
      }
    );
    this.form.controls.date.setValue(this.datePipe.transform(date, 'yyyy-MM-dd'));
  }

  onSubmit() {
    const model: Model = this.form?.value;
    this.urlService.addUrl(model)
      .subscribe(value=>this.callBackOk(value),error=>this.callBackError(error));
  }

  private callBackError(error: HttpErrorResponse) {
    console.log(error)
  }

  private callBackOk(value: ShortUrl) {
    this.longUrl= value;
    this.longUrlEvent.emit(value);
    console.log(value);
  }
}
