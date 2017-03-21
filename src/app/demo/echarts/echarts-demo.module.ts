import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EChartsDemoComponent } from './echarts-demo.component';
import { RebirthEChartsModule } from '../../exports';

@NgModule({
  imports: [CommonModule, RebirthEChartsModule],
  exports: [EChartsDemoComponent],
  declarations: [EChartsDemoComponent],
  providers: [],
  entryComponents: [EChartsDemoComponent]
})
export class EChartsDemoModule {
}
