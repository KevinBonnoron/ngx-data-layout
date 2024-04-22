import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataLayoutFooter } from '../../directives';
import { DataLayoutElement } from '../../models';

@Component({
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './default-footer.component.html',
})
export class DefaultFooterComponent extends DataLayoutFooter<DataLayoutElement> {}
