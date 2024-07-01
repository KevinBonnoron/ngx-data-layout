import { Provider } from '@angular/core';
import { DefaultFooterComponent, DefaultHeaderComponent } from '../components';
import { DataLayoutOptions } from '../models';
import { DATA_LAYOUT_OPTIONS_TOKEN } from '../tokens';

export const provideDataLayout = <T>(configuration: Partial<DataLayoutOptions<T>>): Provider[] => {
  const header = configuration.header ?? DefaultHeaderComponent;
  const components = configuration.components ?? [];
  const layouts = components.map((component) => component.name);
  const defaultLayout = configuration.defaultLayout && layouts.includes(configuration.defaultLayout) ? configuration.defaultLayout : components[0]?.name;
  const footer = configuration.footer ?? DefaultFooterComponent;

  return [
    { provide: DATA_LAYOUT_OPTIONS_TOKEN, useValue: { header, components, defaultLayout, footer } }
  ]
}
