import { Directive } from '@angular/core';
import { DataLayoutElement } from '../models';
import { DataLayout } from './data-layout.directive';

@Directive()
export abstract class DataLayoutFooter<T extends DataLayoutElement> extends DataLayout<T> {}
