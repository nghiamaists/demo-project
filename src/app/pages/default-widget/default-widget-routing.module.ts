import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultWidgetComponent } from './default-widget.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultWidgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultWidgetRoutingModule {}
