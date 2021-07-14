import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {dateValidator} from "./dateValidator";
import {Model} from "../../../model/model";

@Component({
  selector: 'app-input-url-form',
  templateUrl: './input-url-form.component.html',
  styleUrls: ['./input-url-form.component.css'],
  providers: [DatePipe]
})
export class InputUrlFormComponent implements OnInit {

  form: FormGroup | undefined;

  pattern = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)'

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.formInit();

  }


  private formInit(): void {
    const date = new Date();
    date.setDate(date.getDate() + 3);


    this.form = this.fb.group({
        longLink: [null, [Validators.required, Validators.pattern(this.pattern)]],
        date: [null, dateValidator]
      }
    );
    this.form.controls.date.setValue(this.datePipe.transform(date, 'yyyy-MM-dd'));
  }

  onSubmit() {
    const model: Model = this.form?.value;
    console.log(model)
  }
}
