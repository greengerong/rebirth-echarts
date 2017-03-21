import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EChartsComponent } from './echarts.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    EChartsComponent,
  ],
  declarations: [
    EChartsComponent
  ],
  providers: [],
})
export class EChartsModule {
}
