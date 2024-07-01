import { Directive } from '@angular/core';
import { DataLayout } from './data-layout.directive';

@Directive()
export abstract class DataLayoutFooter<T> extends DataLayout<T> {}
