import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxDataLayoutModule } from 'ngx-data-layout';
import { CardsComponent, HexagonsComponent, TableComponent } from '../../components';
import { CharactersService } from '../../services';
import { ClassicRouterModule } from './classic-router.module';
import { ClassicComponent, CustomHeaderComponent } from './components';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';

@NgModule({
  imports: [
    ClassicRouterModule,
    NgxDataLayoutModule.forConfig({
      header: CustomHeaderComponent,
      components: [
        { component: CardsComponent, name: 'card' },
        { component: TableComponent, name: 'table' },
        { component: HexagonsComponent, name: 'hexagon' },
      ],
      footer: CustomFooterComponent
    }),
    MatButtonModule,
  ],
  declarations: [ClassicComponent, CustomHeaderComponent, CustomFooterComponent],
  providers: [
    CharactersService,
  ]
})
export class ClassicModule { }
