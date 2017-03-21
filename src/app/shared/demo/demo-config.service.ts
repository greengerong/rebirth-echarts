import { Injectable, Type } from '@angular/core';
import {
  EChartsDemoComponent
  // component import
} from '../../demo';

@Injectable()
export class DemoConfigService {
  gettingStarted = {
    readMe: require('!html-loader!markdown-loader!../../exports/README.md')
  };

  components: { name: string, cmp: Type<any>, directory?: string, readMe?: string, html?: string, ts?: string }[] = [
    {
      name: 'Echarts',
      directory: 'echarts',
      cmp: EChartsDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/echarts/README.md'),
      html: require('!raw-loader!../../demo/echarts/echarts-demo.component.html'),
      ts: require('!raw-loader!../../demo/echarts/echarts-demo.component.ts'),
    },
    // component declare
  ];
}
