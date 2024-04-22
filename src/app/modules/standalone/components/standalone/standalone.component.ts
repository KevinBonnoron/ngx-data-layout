import { Component, inject } from '@angular/core';
import { NgxDataLayoutModule, provideDataLayout } from 'ngx-data-layout';
import { CardsComponent, HexagonsComponent, TableComponent } from '../../../../components';
import { CharactersService } from '../../../../services';

@Component({
  standalone: true,
  imports: [NgxDataLayoutModule],
  templateUrl: './standalone.component.html',
  providers: [
    provideDataLayout({
      components: [
        { component: CardsComponent, name: 'card' },
        { component: TableComponent, name: 'table' },
        { component: HexagonsComponent, name: 'hexagon' },
      ],
      defaultLayout: 'table'
    }),
  ]
})
export class StandaloneComponent {
  private readonly charactersService = inject(CharactersService);

  readonly characters = this.charactersService.getAll();
}
