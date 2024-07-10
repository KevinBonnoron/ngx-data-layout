import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DataLayoutStore } from '../../models';
import { DATA_LAYOUT_OPTIONS_TOKEN } from '../../tokens';

@Component({
  selector: 'ngx-data-layout-actions',
  standalone: true,
  imports: [MatButtonModule, NgClass],
  templateUrl: './ngx-data-layout-actions.component.html',
  styleUrl: './ngx-data-layout-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxDataLayoutActionsComponent {
  private readonly dataLayoutStore = inject(DataLayoutStore);
  private readonly options = inject(DATA_LAYOUT_OPTIONS_TOKEN);

  readonly layouts = this.options.components.map((component) => component.name);
  readonly currentLayout = this.dataLayoutStore.layout;

  setLayout(layout: string) {
    this.dataLayoutStore.setLayout(layout);
  }
}
