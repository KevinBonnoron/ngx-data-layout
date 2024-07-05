import { Signal, computed, signal } from '@angular/core';
import { DataLayoutStore } from '../models';

export const dataLayoutStoreProvider = <T>(elements: Signal<T[]>, defaultLayout: string): DataLayoutStore<T> => {
  const selected = signal<T[]>([]);
  const currentLayout = signal<string>(defaultLayout);
  const allSelected = computed(() => elements().length > 0 && selected().length === elements().length);
  const someSelected = computed(() => elements().length > 0 && selected().length > 0 && !allSelected());
  const noneSelected = computed(() => !someSelected() && !allSelected());
  const clear = () => selected.set([]);
  const select = (element: T) => selected.update((selected) => [...selected, element])
  const selectAll = () => selected.set(elements());
  const unselect = (element: T) => selected.update((selected) => selected.filter((selectedElement) => selectedElement !== element));
  const unselectAll = () => selected.set([]);
  const isSelected = (element: T) => selected().includes(element)
  const toggle = (element: T) => isSelected(element) ? unselect(element) : select(element);
  const toggleAll = () => allSelected() ? clear() : selected.set(elements());
  const setLayout = (layout: string) => currentLayout.set(layout);

  return {
    currentLayout,
    elements,
    selected,
    allSelected,
    someSelected,
    noneSelected,
    clear,
    select,
    selectAll,
    unselect,
    unselectAll,
    isSelected,
    toggle,
    toggleAll,
    setLayout
  };
}
