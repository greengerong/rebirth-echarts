import { Injectable, Type } from '@angular/core';
import {
  EChartsDemoComponent
  // component import
} from '../../demo';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class DemoConfigService {
  constructor(private domSanitizer: DomSanitizer) {

  }

  gettingStarted = {
    readMe: this.domSanitizer.bypassSecurityTrustHtml(require('!html-loader!markdown-loader!../../exports/README.md'))
  };

  components: { name: string, cmp: Type<any>, directory?: string, readMe?: any, html?: string, ts?: string }[] = [
    {
      name: 'ECharts',
      directory: 'echarts',
      cmp: EChartsDemoComponent,
      readMe: this.domSanitizer.bypassSecurityTrustHtml(require('!html-loader!markdown-loader!../../exports/echarts/README.md')),
      html: require('!raw-loader!../../demo/echarts/echarts-demo.component.html'),
      ts: require('!raw-loader!../../demo/echarts/echarts-demo.component.ts'),
    },
    // component declare
  ];
}
