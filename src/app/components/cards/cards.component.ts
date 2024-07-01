import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DataLayoutComponent } from 'ngx-data-layout';
import { Character } from '../../models';

@Component({
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent extends DataLayoutComponent<Character> {}
