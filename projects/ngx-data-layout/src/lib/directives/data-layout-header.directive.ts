import { Directive, input, model, output } from '@angular/core';
import { DataLayout } from './data-layout.directive';

@Directive()
export abstract class DataLayoutHeader<T> extends DataLayout<T> {
  readonly layouts = input.required<string[]>();
  readonly currentLayout = model<string>();
  readonly layoutChanged = output<string>();

  setLayout(layout: string) {
    this.currentLayout.set(layout);
    this.layoutChanged.emit(layout);
  }
}
