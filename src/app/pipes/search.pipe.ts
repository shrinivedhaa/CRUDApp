import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../entity/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchString: string): any[] {
    if (!searchString || !value)
      return value;
    searchString = searchString.toLocaleLowerCase();

    // used to search only the name attribute of an object
    // return value.filter(p => p.name.toLocaleLowerCase().includes(searchString));

    //search in all attributes of an object
    return value.filter(p => JSON.stringify(p).toLocaleLowerCase().includes(searchString));
  }

}
