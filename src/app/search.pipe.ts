import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  arg2: any = 'PRODUCT NOT FOUND';
  transform(value: any, args?: any): any {
    if (!value) return null;
    console.log(args);
    if (!args) {
      return value;
    } else {
    }

    args = args.toLowerCase();

    return value.filter(function (data: any) {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }
}
