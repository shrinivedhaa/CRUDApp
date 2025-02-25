import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../entity/product';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: Product[], sortColumn: keyof Product, sortDirection: string): Product[] {
    if (!items || !sortColumn) {
      return items;
    }

    const sortedItems = [...items];
    sortedItems.sort((a, b) => {
      const aValue = a[sortColumn] ?? '';  // Fallback to empty string if undefined
      const bValue = b[sortColumn] ?? '';  // Fallback to empty string if undefined

      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return sortedItems;
  }
}

