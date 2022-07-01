import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerieAPageRoutingModule } from './serie-a-routing.module';

import { SerieAPage } from './serie-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerieAPageRoutingModule
  ],
  declarations: [SerieAPage]
})
export class SerieAPageModule {}
