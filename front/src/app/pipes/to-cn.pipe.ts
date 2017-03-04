import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCn'
})
export class ToCnPipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case 'top250':
      return '最高评分';
      case 'in_theaters':
      return '正在热映';
      case 'coming_soon':
      return '即将上映';
      default:
      return 'null';

    }
  }

}
