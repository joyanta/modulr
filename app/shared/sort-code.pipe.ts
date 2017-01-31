import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortcode'})
export class SortCodePipe implements PipeTransform {
  transform(value: string): string {
    return value[0] + value[1]
      + '-' + value[2] + value[3]
      + '-' + value[4] + value[5];
  }
}
