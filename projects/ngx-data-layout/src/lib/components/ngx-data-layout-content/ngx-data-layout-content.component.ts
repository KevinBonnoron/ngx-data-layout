import { ChangeDetectionStrategy, Component, Type, ViewContainerRef, effect, inject, viewChild } from '@angular/core';
import { DataLayoutComponent } from '../../directives';
import { DataLayoutStore } from '../../models';
import { DATA_LAYOUT_OPTIONS_TOKEN } from '../../tokens';

@Component({
  selector: 'ngx-data-layout-content',
  standalone: true,
  templateUrl: './ngx-data-layout-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxDataLayoutContentComponent<T> {
  private readonly dataLayoutStore = inject(DataLayoutStore);
  private readonly options = inject(DATA_LAYOUT_OPTIONS_TOKEN);
  private readonly containerViewContainerRef = viewChild.required('container', { read: ViewContainerRef }); 

  constructor() {
    effect(() => {
      const currentLayout = this.dataLayoutStore.currentLayout();
      const dataLayoutComponent = this.options.components.find((component) => component.name === currentLayout);
      if (dataLayoutComponent) {
        this.createComponent(dataLayoutComponent.component);
      }
    });
  }

  private createComponent(dataLayoutComponent: Type<DataLayoutComponent<T>>) {
    const containerViewContainerRef = this.containerViewContainerRef();
    containerViewContainerRef.clear();
    const componentRef = containerViewContainerRef.createComponent(dataLayoutComponent);
    componentRef.location.nativeElement.classList.add('content');
  }
}
