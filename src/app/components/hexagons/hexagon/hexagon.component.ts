import { Component, input } from '@angular/core';
import { Character } from '../../../models';

@Component({
  standalone: true,
  selector: 'hexagon',
  templateUrl: './hexagon.component.html',
  styleUrl: './hexagon.component.scss',
})
export class HexagonComponent {
  readonly element = input.required<Character>();
}
