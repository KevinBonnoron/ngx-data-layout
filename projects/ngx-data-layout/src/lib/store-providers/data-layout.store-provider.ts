import { Signal, computed, signal } from '@angular/core';
import { DataLayoutStore, Filter } from '../models';

const applyFilters = <T>(elements: T[], filter: Filter<T>) => {
  return elements.filter((element) => {
    for (const [key, value] of Object.entries(filter)) {
      if (typeof value === 'function') {
        if (!value(element[key as keyof T])) {
          return false;
        }
      } else {
        if (element[key as keyof T] !== value) {
          return false;
        }
      }
    }

    return true;
  })
}

export const dataLayoutStoreProvider = <T>(values: Signal<T[]>, defaultLayout: string): DataLayoutStore<T> => {
  const selection = signal<T[]>([]);
  const filters = signal<Filter<T>>({});
  const layout = signal<string>(defaultLayout);
  const elements = computed(() => applyFilters(values(), filters()));
  const selected = computed(() => selection().filter((element) => elements().includes(element)));
  const allSelected = computed(() => elements().length > 0 && selected().length === elements().length);
  const someSelected = computed(() => elements().length > 0 && selected().length > 0 && !allSelected());
  const noneSelected = computed(() => !someSelected() && !allSelected());
  const clear = () => selection.set([]);
  const select = (element: T) => selection.update((selection) => [...selection, element])
  const selectAll = () => selection.set(elements());
  const unselect = (element: T) => selection.update((selection) => selection.filter((selectedElement) => selectedElement !== element));
  const unselectAll = () => selection.set([]);
  const isSelected = (element: T) => selected().includes(element)
  const toggle = (element: T) => isSelected(element) ? unselect(element) : select(element);
  const toggleAll = () => allSelected() ? clear() : selection.set(elements());
  const setLayout = (value: string) => layout.set(value);
  const setFilters = (value: Filter<T>) => filters.set(value);

  return {
    layout,
    elements,
    selected,
    allSelected,
    someSelected,
    noneSelected,
    filters,
    clear,
    select,
    selectAll,
    unselect,
    unselectAll,
    isSelected,
    toggle,
    toggleAll,
    setLayout,
    setFilters
  };
}
