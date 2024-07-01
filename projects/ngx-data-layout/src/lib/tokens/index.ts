import { InjectionToken } from '@angular/core';
import { DataLayoutOptions } from '../models';

export const DATA_LAYOUT_OPTIONS_TOKEN = new InjectionToken<DataLayoutOptions<any>>('Data layout options');
