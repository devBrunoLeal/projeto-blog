import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipee'
})
export class PipeePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
