import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, args?: string): string {
    // value is a duration in second
    let result = '';
    const hours = Math.floor(value / (60 * 60));
    const minutes = Math.floor(value / 60 - hours * 60);
    if (hours > 0) {
      result += hours + 'h';
      result += minutes < 10 ? '0' + minutes + 'm' : minutes + 'm';
    } else {
      result += minutes + 'm';
    }
    return result;
  }

}
