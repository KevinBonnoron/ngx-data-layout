import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxDataLayoutComponent } from './components';
import { DataLayoutOptions } from './models';
import { provideDataLayout } from './providers';

@NgModule({
  imports: [NgxDataLayoutComponent],
  exports: [NgxDataLayoutComponent]
})
export class NgxDataLayoutModule {
  static forConfig<T>(configuration: Partial<DataLayoutOptions<T>>): ModuleWithProviders<NgxDataLayoutModule> {
    return {
      ngModule: NgxDataLayoutModule,
      providers: [provideDataLayout(configuration)]
    }
  }
}
