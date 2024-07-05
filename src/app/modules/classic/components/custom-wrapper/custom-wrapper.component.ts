import { Component, inject } from '@angular/core';
import { DataLayoutStore } from 'ngx-data-layout';
import { Character } from '../../../../models';

@Component({
  selector: 'app-custom-wrapper',
  templateUrl: './custom-wrapper.component.html',
})
export class CustomWrapperComponent {
  private readonly dataLayoutStore = inject(DataLayoutStore<Character>);

  readonly allSelected = this.dataLayoutStore.allSelected;

  selectAll() {
    this.dataLayoutStore.selectAll();
  }
}