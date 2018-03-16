import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'shape'
})
export class ShapePipe implements PipeTransform {

  transform = orderBy;

}
