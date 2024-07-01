import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DataLayoutHeader } from '../../directives';

@Component({
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends DataLayoutHeader<unknown> {}
