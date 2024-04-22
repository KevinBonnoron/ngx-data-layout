import { Component, computed, viewChild } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataLayoutComponent } from 'ngx-data-layout';
import { Character } from '../../models';

@Component({
  standalone: true,
  imports: [MatCheckboxModule, MatPaginatorModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent extends DataLayoutComponent<Character> {
  readonly matPaginator = viewChild.required(MatPaginator);
  readonly displayedColumns = ['select', 'id', 'name'];

  readonly length = computed(() => this.elements().length);
  readonly dataSource = computed(() => {
    const dataSource = new MatTableDataSource<Character>(this.elements());
    dataSource.paginator = this.matPaginator();

    return dataSource;
  });
}
