import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DataLayoutHeader } from '../../directives';
import { DataLayoutElement } from '../../models';

@Component({
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends DataLayoutHeader<DataLayoutElement> {}
