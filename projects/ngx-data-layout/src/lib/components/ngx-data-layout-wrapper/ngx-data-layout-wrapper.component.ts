import { Component } from '@angular/core';
import { NgxDataLayoutActionsComponent } from '../ngx-data-layout-actions/ngx-data-layout-actions.component';
import { NgxDataLayoutContentComponent } from '../ngx-data-layout-content/ngx-data-layout-content.component';

@Component({
  selector: 'ngx-data-layout-wrapper',
  standalone: true,
  imports: [NgxDataLayoutContentComponent, NgxDataLayoutActionsComponent],
  templateUrl: './ngx-data-layout-wrapper.component.html',
})
export class NgxDataLayoutWrapperComponent {}
