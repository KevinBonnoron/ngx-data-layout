import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxDataLayoutModule } from 'ngx-data-layout';
import { CardsComponent, HexagonsComponent, TableComponent } from '../../components';
import { CharactersService } from '../../services';
import { ClassicRouterModule } from './classic-router.module';
import { ClassicComponent, CustomWrapperComponent } from './components';

@NgModule({
  imports: [
    FormsModule,
    ClassicRouterModule,
    MatFormFieldModule,
    MatInputModule,
    NgxDataLayoutModule.forConfig({
      wrapper: CustomWrapperComponent,
      components: [
        { component: CardsComponent, name: 'card' },
        { component: TableComponent, name: 'table' },
        { component: HexagonsComponent, name: 'hexagon' },
      ],
    }),
    MatButtonModule,
  ],
  declarations: [ClassicComponent, CustomWrapperComponent],
  providers: [
    CharactersService,
  ]
})
export class ClassicModule { }
