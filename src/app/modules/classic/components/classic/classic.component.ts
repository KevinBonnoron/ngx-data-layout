import { Component, inject } from '@angular/core';
import { CharactersService } from '../../../../services';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html'
})
export class ClassicComponent {
  private readonly charactersService = inject(CharactersService);

  readonly characters = this.charactersService.getAll();
}
