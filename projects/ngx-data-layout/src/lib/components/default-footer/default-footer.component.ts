import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataLayoutFooter } from '../../directives';

@Component({
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './default-footer.component.html',
})
export class DefaultFooterComponent extends DataLayoutFooter<unknown> {}
