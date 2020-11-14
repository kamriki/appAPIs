import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ClipboardPageRoutingModule } from './clipboard-routing.module';
import { ClipboardPage } from './clipboard.page';
import { SharedModule } from 'src/app/common/shared.module';

@NgModule({
  imports: [
    CommonModule, IonicModule, ClipboardPageRoutingModule, 
    SharedModule
  ],
  declarations: [ClipboardPage]
})
export class ClipboardPageModule {}
