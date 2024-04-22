import { Directive } from '@angular/core';
import { DataLayoutElement } from '../models';
import { DataLayout } from './data-layout.directive';

@Directive()
export abstract class DataLayoutComponent<T extends DataLayoutElement> extends DataLayout<T> {
  toggle(element: T) {
    return this.dataLayoutStore().toggle(element);
  }

  toggleAll() {
    return this.dataLayoutStore().toggleAll();
  }

  select(element: T) {
    return this.dataLayoutStore().select(element);
  }

  isSelected(element: T) {
    return this.dataLayoutStore().isSelected(element);
  }
}
