import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(item: any[], sortBy: string): any[] {
    if(!item || !sortBy) {
      return item;
    }

    return item.sort((a, b) => {
      if(sortBy == 'asc') {
        return a.discountPrice - b.discountPrice;
      }
      else if(sortBy == 'desc') {
        return b.discountPrice - a.discountPrice;
      } else {
        return 0;
      }
    })
  }

}
