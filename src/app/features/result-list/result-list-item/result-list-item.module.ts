import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { ResultListItemComponent } from './result-list-item.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ResultListItemComponent,
  ],
  exports: [
    ResultListItemComponent
  ]
})

export class ResultListItemModule { }
