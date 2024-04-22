import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadComponent: () => import('./components').then((m) => m.StandaloneComponent) }
  ])]
})
export class StandaloneModule {}
