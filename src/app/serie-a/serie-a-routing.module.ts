import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieAPage } from './serie-a.page';

const routes: Routes = [
  {
    path: '',
    component: SerieAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerieAPageRoutingModule {}
