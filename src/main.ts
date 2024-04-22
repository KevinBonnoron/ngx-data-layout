import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    provideRouter([
      { path: 'standalone', loadChildren: () => import('./app/modules').then((m) => m.StandaloneModule) },
      { path: 'classic', loadChildren: () => import('./app/modules').then((m) => m.ClassicModule) },
      { path: '**', redirectTo: 'standalone' }
    ]),
    provideExperimentalZonelessChangeDetection(),
  ]
})
  .catch((err) => console.error(err));
