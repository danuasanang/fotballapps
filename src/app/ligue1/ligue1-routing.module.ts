import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ligue1Page } from './ligue1.page';

const routes: Routes = [
  {
    path: '',
    component: Ligue1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ligue1PageRoutingModule {}
