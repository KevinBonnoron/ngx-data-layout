import { Directive, inject } from '@angular/core';
import { DataLayoutStore } from '../models';

@Directive()
export abstract class DataLayoutComponent<T> {
  private readonly dataLayoutStore = inject(DataLayoutStore);

  readonly elements = this.dataLayoutStore.elements;
  readonly selectedElements = this.dataLayoutStore.selected;
  readonly allSelected = this.dataLayoutStore.allSelected;
  readonly someSelected = this.dataLayoutStore.someSelected;

  toggle(element: T) {
    return this.dataLayoutStore.toggle(element);
  }

  toggleAll() {
    return this.dataLayoutStore.toggleAll();
  }

  select(element: T) {
    return this.dataLayoutStore.select(element);
  }

  selectAll() {
    return this.dataLayoutStore.selectAll();
  }

  unselect(element: T) {
    return this.dataLayoutStore.unselect(element);
  }

  unselectAll() {
    return this.dataLayoutStore.unselectAll();
  }

  isSelected(element: T) {
    return this.dataLayoutStore.isSelected(element);
  }
}
