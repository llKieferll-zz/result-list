import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from './material';

@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialComponentsModule
  ]
})
export class SharedModule { }
