import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/default-widget/default-widget.module').then(
        (m) => m.DefaultWidgetModule
      ),
  },
  {
    path: 'interactive',
    loadChildren: () =>
      import('./pages/interactive-widget/interactive-widget.module').then(
        (m) => m.InteractiveWidgetModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
