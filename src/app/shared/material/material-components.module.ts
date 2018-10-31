import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatGridListModule,
  MatIconModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatChipsModule
  ]
})

export class MaterialComponentsModule { }
