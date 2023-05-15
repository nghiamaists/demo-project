import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractiveWidgetComponent } from './interactive-widget.component';

const routes: Routes = [
  {
    path: '',
    component: InteractiveWidgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractiveWidgetRoutingModule {}
