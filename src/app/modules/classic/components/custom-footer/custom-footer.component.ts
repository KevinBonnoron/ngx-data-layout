import { Component, inject } from '@angular/core';
import { DataLayoutFooter } from 'ngx-data-layout';
import { Character } from '../../../../models';
import { CharactersService } from '../../../../services';

@Component({
  templateUrl: './custom-footer.component.html'
})
export class CustomFooterComponent extends DataLayoutFooter<Character> {
  private readonly charactersService = inject(CharactersService);

  removeSelected() {
    for (const element of this.selectedElements()) {
      this.charactersService.remove(element);
    }
  }
}
