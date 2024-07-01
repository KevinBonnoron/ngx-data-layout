import { Directive, computed, input } from '@angular/core';
import { DataLayoutStore } from '../stores';

@Directive()
export abstract class DataLayout<T> {
  protected readonly dataLayoutStore = input.required<DataLayoutStore<T>>();

  readonly elements = computed(() => this.dataLayoutStore().elements());
  readonly selectedElements = computed(() => this.dataLayoutStore().selected());
  readonly allSelected = computed(() => this.dataLayoutStore().allSelected());
  readonly someSelected = computed(() => this.dataLayoutStore().someSelected());
}
