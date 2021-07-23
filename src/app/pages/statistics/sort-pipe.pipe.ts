import { Pipe, PipeTransform } from '@angular/core';
import {Statistic} from "../../model/statistic";

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: Statistic[], sortBy: 'id' | 'shortUrl' | 'longUrl' | 'amount', reverse: boolean): Statistic[] {
    if (!value)
      return [];

    if (!sortBy)
      return value;
    if (reverse)
      return value.sort((a, b) => a[sortBy] < b[sortBy] ? -1 : 1).reverse();
    return value.sort((a, b) => a[sortBy] < b[sortBy] ? -1 : 1)
  }

}
