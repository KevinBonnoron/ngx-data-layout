import { Type } from '@angular/core';
import { DataLayoutComponent, DataLayoutHeader } from '../directives';
import { DataLayoutFooter } from '../directives/data-layout-footer.directive';

export interface DataLayoutOptionsComponent<T> {
  component: Type<DataLayoutComponent<T>>;
  name: string;
}

export interface DataLayoutOptions<T> {
  header: Type<DataLayoutHeader<T>>;
  components: DataLayoutOptionsComponent<T>[];
  defaultLayout: string;
  footer: Type<DataLayoutFooter<T>>;
}

