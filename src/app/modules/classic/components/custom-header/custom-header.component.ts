import { Component } from '@angular/core';
import { DataLayoutHeader } from 'ngx-data-layout';
import { Character } from '../../../../models';

@Component({
  templateUrl: './custom-header.component.html',
  styleUrl: './custom-header.component.scss',
})
export class CustomHeaderComponent extends DataLayoutHeader<Character> {}
