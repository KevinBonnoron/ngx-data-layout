import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxDataLayoutActionsComponent, NgxDataLayoutComponent, NgxDataLayoutContentComponent } from './components';
import { DataLayoutOptions } from './models';
import { provideDataLayout } from './providers';

@NgModule({
  imports: [NgxDataLayoutComponent, NgxDataLayoutActionsComponent, NgxDataLayoutContentComponent],
  exports: [NgxDataLayoutComponent, NgxDataLayoutActionsComponent, NgxDataLayoutContentComponent]
})
export class NgxDataLayoutModule {
  static forConfig<T>(configuration: Partial<DataLayoutOptions<T>>): ModuleWithProviders<NgxDataLayoutModule> {
    return {
      ngModule: NgxDataLayoutModule,
      providers: [provideDataLayout(configuration)]
    }
  }
}
