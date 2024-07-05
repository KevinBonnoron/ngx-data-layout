import { Provider } from '@angular/core';
import { NgxDataLayoutWrapperComponent } from '../components';
import { DataLayoutOptions } from '../models';
import { DATA_LAYOUT_OPTIONS_TOKEN } from '../tokens';

export const provideDataLayout = <T>(configuration: Partial<DataLayoutOptions<T>>): Provider[] => {
  const wrapper = configuration.wrapper ?? NgxDataLayoutWrapperComponent;
  const components = configuration.components ?? [];

  return [
    { provide: DATA_LAYOUT_OPTIONS_TOKEN, useValue: { wrapper, components } }
  ];
}
