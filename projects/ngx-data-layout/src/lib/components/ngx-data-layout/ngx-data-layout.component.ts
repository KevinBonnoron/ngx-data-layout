import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewContainerRef, inject, model, viewChild } from '@angular/core';
import { DataLayoutOptionsComponent } from '../../models';
import { DataLayoutStoreProvider } from '../../stores';
import { DATA_LAYOUT_OPTIONS_TOKEN } from '../../tokens';

@Component({
  standalone: true,
  imports: [NgTemplateOutlet],
  selector: 'ngx-data-layout',
  templateUrl: './ngx-data-layout.component.html',
  styleUrl: './ngx-data-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'ngxDataLayout'
})
export class NgxDataLayoutComponent<T> implements OnInit {
  private readonly options = inject(DATA_LAYOUT_OPTIONS_TOKEN);

  readonly elements = model.required<T[]>();
  readonly headerViewContainerRef = viewChild.required('header', { read: ViewContainerRef })
  readonly contentViewContainerRef = viewChild.required('content', { read: ViewContainerRef });
  readonly footerViewContainerRef = viewChild.required('footer', { read: ViewContainerRef });

  readonly dataLayoutStore = DataLayoutStoreProvider(this.elements);
  
  ngOnInit(): void {
    this.createHeader();

    const dataLayoutComponent = this.options.components.find((component) => component.name === this.options.defaultLayout);
    if (dataLayoutComponent) {
      this.createContent(dataLayoutComponent);
    }

    this.createFooter();
  }

  private createHeader() {
    const headerViewContainerRef = this.headerViewContainerRef();
    const componentRef = headerViewContainerRef.createComponent(this.options.header);
    componentRef.setInput('dataLayoutStore', this.dataLayoutStore);
    componentRef.setInput('layouts', this.layouts);
    componentRef.setInput('currentLayout', this.options.defaultLayout);
    componentRef.instance.layoutChanged.subscribe((layout) => {
      const dataLayoutComponent = this.options.components.find((component) => component.name === layout);
      if (dataLayoutComponent) {
        this.createContent(dataLayoutComponent);
      }
    });
  }

  private createContent(dataLayoutComponent: DataLayoutOptionsComponent<T>) {
    const contentViewContainerRef = this.contentViewContainerRef();
    contentViewContainerRef.clear();
    const componentRef = contentViewContainerRef.createComponent(dataLayoutComponent.component);
    componentRef.setInput('dataLayoutStore', this.dataLayoutStore);
  }

  private createFooter() {
    const footerViewContainerRef = this.footerViewContainerRef();
    const componentRef = footerViewContainerRef.createComponent(this.options.footer);
    componentRef.setInput('dataLayoutStore', this.dataLayoutStore);
  }

  get layouts() {
    return this.options.components.map((component) => component.name);
  }
}
