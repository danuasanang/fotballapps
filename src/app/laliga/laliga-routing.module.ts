import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaligaPage } from './laliga.page';

const routes: Routes = [
  {
    path: '',
    component: LaligaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaligaPageRoutingModule {}
