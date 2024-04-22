import { Directive, effect, input, model, output } from '@angular/core';
import { DataLayoutElement } from '../models';
import { DataLayout } from './data-layout.directive';

@Directive()
export abstract class DataLayoutHeader<T extends DataLayoutElement> extends DataLayout<T> {
  readonly layouts = input.required<string[]>();
  readonly currentLayout = model<string>();
  readonly layoutChanged = output<string>();

  constructor() {
    super();
    effect(() => {
      const currentLayout = this.currentLayout();
      if (currentLayout) {
        this.layoutChanged.emit(currentLayout);
      }
    });
  }

  setLayout(layout: string) {
    this.currentLayout.set(layout);
  }
}
