import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MOCK_WHETHER } from './core/constants/mock-data';
import { MOCK_DATA } from './core/di/moc-data.di';

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
  providers: [
    {
      provide: MOCK_DATA,
      useValue: MOCK_WHETHER,
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
