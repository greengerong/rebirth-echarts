import { NgModule, ModuleWithProviders } from '@angular/core';
import { EChartsModule } from './echarts';


@NgModule({
  imports: [
    EChartsModule,
  ],
  exports: [
    EChartsModule,
  ],
  declarations: [],
  providers: [],
})
export class RebirthEChartsModule {
}
