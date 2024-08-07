import { Signal, Type } from '@angular/core';
import { DataLayoutComponent } from '../directives';

export type Filter<T> = {
  [K in keyof T]?: T[K] | ((value: T[K]) => boolean);
}

export abstract class DataLayoutStore<T> {
  readonly layout!: Signal<string>;
  readonly elements!: Signal<T[]>;
  readonly selected!: Signal<T[]>;
  readonly allSelected!: Signal<boolean>;
  readonly someSelected!: Signal<boolean>;
  readonly noneSelected!: Signal<boolean>;
  readonly filters!: Signal<Filter<T>>;
  abstract clear(): void;
  abstract select(element: T): void;
  abstract selectAll(): void;
  abstract unselect(element: T): void;
  abstract unselectAll(): void;
  abstract isSelected(element: T): boolean;
  abstract toggle(element: T): void;
  abstract toggleAll(): void;
  abstract setLayout: (layout: string) => void;
  abstract setFilters: (filters: Filter<T>) => void;
}

export interface DataLayoutOptionsComponent<T> {
  component: Type<DataLayoutComponent<T>>;
  name: string;
  default?: true;
}

export interface DataLayoutOptions<T> {
  wrapper: Type<unknown>;
  components: DataLayoutOptionsComponent<T>[];
}
