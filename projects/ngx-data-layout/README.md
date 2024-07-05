# NgxDataLayout

![screenshot](./images/screenshot.png 'Example')

This library aims to display data in a configurable way.

# Installation

```shell
npm install ngx-data-layout
```

# Usage

First you need to define the components that will display your data. To do so, define a class that extends the DataLayoutComponent class with the generic model type you are going to display

```typescript
// cards.component.ts
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DataLayoutComponent } from 'ngx-data-layout';
import { Character } from '../../models';

@Component({
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule],
  templateUrl: './cards.component.html',
})
export class CardsComponent extends DataLayoutComponent<Character> {}
```

Then in your template you can use:

- elements: contains the data you passed
- toggle(element): to change the selected state of an element
- isSelected(element): to get the selected state of an element

```html
<!-- cards.component.html -->
@for(element of elements(); track element.id) {
<mat-card class="full">
  <mat-card-header>
    <mat-card-title>{{ element.id }}</mat-card-title>
    <mat-checkbox [checked]="isSelected(element)" (change)="toggle(element)" />
  </mat-card-header>
  <mat-card-content>{{ element.name }}</mat-card-content>
</mat-card>
}
```

## Standalone components

To use it in standalone component:

- add the `NgxDataLayoutModule` module to the component `imports` property
- add the `provideDataLayout` function to the component `providers` property with the configuration

```typescript
// standalone.component.ts
import { Component } from '@angular/core';
import { NgxDataLayoutModule, provideDataLayout } from 'ngx-data-layout';
import { CardsComponent, HexagonsComponent, TableComponent } from './components';

@Component({
  standalone: true,
  imports: [NgxDataLayoutModule],
  templateUrl: './standalone.component.html',
  providers: [
    provideDataLayout({
      components: [
        { component: CardsComponent, name: 'card' },
        { component: TableComponent, name: 'table' },
        { component: HexagonsComponent, name: 'hexagon' },
      ]
    }),
  ]
})
export class StandaloneComponent {
  readonly elements = [...];
}
```

```html
<!-- standalone.component.html -->
<ngx-data-layout [elements]="elements" />
```

## Classic components

To use it in classic component:

- use the NgxDataLayoutModule `forConfig` static method in the module `imports` property with the configuration

```typescript
// classic.module.ts
import { NgModule } from '@angular/core';
import { NgxDataLayoutModule } from 'ngx-data-layout';
import { CardsComponent, ClassicComponent, HexagonsComponent, TableComponent } from './components';

@NgModule({
  imports: [
    NgxDataLayoutModule.forConfig({
      components: [
        { component: CardsComponent, name: 'card' },
        { component: TableComponent, name: 'table' },
        { component: HexagonsComponent, name: 'hexagon' },
      ],
    }),
  ],
  declarations: [ClassicComponent],
})
export class ClassicModule {}
```

```typescript
import { Component } from '@angular/core';

@Component({
  templateUrl: './classic.component.html'
})
export class ClassicComponent {
  readonly elements = [...];
}
```

```html
<!-- classic.component.html -->
<ngx-data-layout [elements]="elements" />
```

# Custom Template

You can use a custom component for the template by using the `wrapper` property when providing options. In the template use the default ngx-data-layout-actions & ngx-data-layout-content components to include the buttons and the the layout component:

```typescript
/// custom-wrapper.component.ts
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-custom-wrapper',
  templateUrl: './custom-wrapper.component.html',
})
export class CustomWrapperComponent {}
```

```html
// custom-wrapper.component.html
<div style="background-color: red">
  <ngx-data-layout-actions />
</div>
<ngx-data-layout-content />
```

```typescript
provideDataLayout({
  header: CustomHeaderComponent,
  [...]
}),
```

# Api

## Stores

### DataLayoutStore

Injected class which contains data

## Directives

### DataLayoutComponent

Base class for every DataLayout component.

| Name                                  | Description                                                      |
| ------------------------------------- | ---------------------------------------------------------------- |
| elements: Signal<T[]>;                | Provided elements                                                |
| selectedElements: Signal<T[]>;        | Selected elements                                                |
| allSelected: Signal<boolean>;         | Return true if all elements have been selected                   |
| someSelected: Signal<boolean>;        | Return true if some (not all) elements have been selected        |
| toggle(element: Element): void        | Change the selected state of the passed element                  |
| toggleAll(): void                     | Change the selected state of all elements (based on allSelected) |
| select(element: Element): void        | Select the passed element                                        |
| selectAll(): void                     | Select all elements                                              |
| unselect(element: Element): void      | Unselect the passed element                                      |
| unselectAll(): void                   | Unselect all elements                                            |
| isSelected(element: Element): boolean | Return true if the passed element is selected                    |
