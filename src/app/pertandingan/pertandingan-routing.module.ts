import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PertandinganPage } from './pertandingan.page';

const routes: Routes = [
  {
    path: '',
    component: PertandinganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PertandinganPageRoutingModule {}
