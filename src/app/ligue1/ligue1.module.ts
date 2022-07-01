import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ligue1PageRoutingModule } from './ligue1-routing.module';

import { Ligue1Page } from './ligue1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ligue1PageRoutingModule
  ],
  declarations: [Ligue1Page]
})
export class Ligue1PageModule {}
