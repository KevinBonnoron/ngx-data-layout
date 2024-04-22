import { InjectionToken } from '@angular/core';
import { DataLayoutElement, DataLayoutOptions } from '../models';

export const DATA_LAYOUT_OPTIONS_TOKEN = new InjectionToken<DataLayoutOptions<DataLayoutElement>>('Data layout options');
