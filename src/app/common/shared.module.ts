import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [];
const modules = [
    CommonModule, IonicModule, RouterModule, 
    FormsModule, ReactiveFormsModule
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule { }