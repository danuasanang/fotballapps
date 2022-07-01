import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PertandinganPageRoutingModule } from './pertandingan-routing.module';

import { PertandinganPage } from './pertandingan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PertandinganPageRoutingModule
  ],
  declarations: [PertandinganPage]
})
export class PertandinganPageModule {}
