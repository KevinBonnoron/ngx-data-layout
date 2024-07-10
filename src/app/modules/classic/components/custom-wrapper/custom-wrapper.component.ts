import { Component, effect, inject, model } from '@angular/core';
import { DataLayoutStore } from 'ngx-data-layout';
import { Character } from '../../../../models';

@Component({
  selector: 'app-custom-wrapper',
  templateUrl: './custom-wrapper.component.html',
})
export class CustomWrapperComponent {
  private readonly dataLayoutStore = inject(DataLayoutStore<Character>);

  readonly allSelected = this.dataLayoutStore.allSelected;
  readonly filters = model<string>('');

  constructor() {
    effect(() => {
      const filters = this.filters().toLowerCase();
      this.dataLayoutStore.setFilters({
        name: (value) => value.toLowerCase().includes(filters)
      });
    }, { allowSignalWrites: true });
  }

  selectAll() {
    this.dataLayoutStore.selectAll();
  }
}
