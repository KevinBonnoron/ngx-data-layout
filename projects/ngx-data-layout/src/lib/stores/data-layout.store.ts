import { Signal, computed, signal } from '@angular/core';
import { DataLayoutElement } from '../models';

export interface DataLayoutStore<T extends DataLayoutElement> {
  elements: Signal<T[]>;
  selected: Signal<T[]>;
  allSelected: Signal<boolean>;
  someSelected: Signal<boolean>;
  clear(): void;
  select(element: T): void;
  isSelected(element: T): boolean;
  unselect(element: T): void;
  toggle(element: T): void;
  toggleAll(): void;
}

export const DataLayoutStoreProvider = <T extends DataLayoutElement>(elements: Signal<T[]>, selected = signal<T[]>([])): DataLayoutStore<T> => {
  const allSelected = computed(() => elements().length > 0 && selected().length === elements().length);
  const someSelected = computed(() => elements().length > 0 && selected().length > 0 && !allSelected());
  const clear = () => selected.set([]);
  const select = (element: T) => selected.update((selected) => [...selected, element])
  const unselect = (element: T) => selected.update((selected) => selected.filter((selectedElement) => selectedElement !== element));
  const isSelected = (element: T) => selected().includes(element)
  const toggle = (element: T) => isSelected(element) ? unselect(element) : select(element);
  const toggleAll = () => allSelected() ? clear() : selected.set(elements());

  return {
    elements,
    selected,
    allSelected,
    someSelected,
    clear,
    select,
    unselect,
    isSelected,
    toggle,
    toggleAll,
  }
}

