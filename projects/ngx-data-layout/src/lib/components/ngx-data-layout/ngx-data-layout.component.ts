import { ChangeDetectionStrategy, Component, Injector, OnInit, ViewContainerRef, inject, model, viewChild } from '@angular/core';
import { DataLayoutStore } from '../../models';
import { dataLayoutStoreProvider } from '../../store-providers';
import { DATA_LAYOUT_OPTIONS_TOKEN } from '../../tokens';

@Component({
  selector: 'ngx-data-layout',
  standalone: true,
  templateUrl: './ngx-data-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'ngxDataLayout'
})
export class NgxDataLayoutComponent<T> implements OnInit {
  private readonly injector = inject(Injector);
  private readonly options = inject(DATA_LAYOUT_OPTIONS_TOKEN);

  private readonly wrapperViewContainerRef = viewChild.required('wrapper', { read: ViewContainerRef });

  readonly elements = model.required<T[]>();

  ngOnInit() {
    const injector = Injector.create({
      parent: this.injector,
      providers: [{ provide: DataLayoutStore, useValue: dataLayoutStoreProvider(this.elements, this.options.components.find((component) => component.default)?.name ?? this.options.components.find(() => true)?.name ?? '') }],
    });

    const wrapperViewContainerRef = this.wrapperViewContainerRef();
    wrapperViewContainerRef.clear();
    wrapperViewContainerRef.createComponent(this.options.wrapper, { injector });
  }
}
