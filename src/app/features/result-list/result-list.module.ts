import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { ResultListItemModule } from './result-list-item';
import { ResultListComponent } from './result-list.component';
import { ResultListRoutingModule } from './result-list-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ResultListItemModule,
    ResultListRoutingModule,
  ],
  declarations: [
    ResultListComponent
  ],
  exports: [
    ResultListComponent
  ]
})

export class ResultListModule { }
