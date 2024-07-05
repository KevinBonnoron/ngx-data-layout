import { NgClass } from '@angular/common';
import { Component, computed } from '@angular/core';
import { DataLayoutComponent } from 'ngx-data-layout';
import { Character } from '../../models';
import { HexagonComponent } from './hexagon/hexagon.component';

const chunk = (arr: any[], size: number) =>
  arr
    .reduce((acc, _, i) =>
      (i % size)
        ? acc
        : [...acc, arr.slice(i, i + size)]
    , [])

@Component({
  standalone: true,
  imports: [HexagonComponent, NgClass],
  templateUrl: './hexagons.component.html',
  styleUrl: './hexagons.component.scss',
})
export class HexagonsComponent extends DataLayoutComponent<Character> {
  readonly chunks = computed(() => chunk(this.elements(), 3));
}
