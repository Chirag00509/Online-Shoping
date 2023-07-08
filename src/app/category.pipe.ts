import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products: any[], category: string): any[] {
    if (!category || category.trim().toLowerCase() === 'all') {
      return products;
    }
    return products.filter(product => product.category.trim().toLowerCase() === category.trim().toLowerCase());
  }
}
