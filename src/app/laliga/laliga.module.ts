import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaligaPageRoutingModule } from './laliga-routing.module';

import { LaligaPage } from './laliga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaligaPageRoutingModule
  ],
  declarations: [LaligaPage]
})
export class LaligaPageModule {}
