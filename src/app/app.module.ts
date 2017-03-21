import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import {
  EChartsDemoModule
} from './demo';
import { RebirthEChartsModule } from './exports';
import { RouterModule } from '@angular/router';
import { RebirthUIModule } from 'ng2-rebirth-ui';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    SharedModule.forRoot(),
    RebirthEChartsModule.forRoot(),
    RebirthUIModule.forRoot(),
    EChartsDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


