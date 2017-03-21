# Getting started 

> Angular2 UI plugin with ECharts

## Welcome

Welcome to `@Rebirth/ECharts`. This repo is Angular2 ui library for ECharts. And it is being built from scratch in Typescript.

You can check [Demo Showcase](/rebirth-chart) & [API document](/rebirth-chart/compodocs/overview.html).


## Dependencies

`@Rebirth/ECharts` is all base on Angular2 and Chart.js.
The only required dependencies are:

* [Angular](https://angular.io/) (requires `Angular` version 2.3.1 or higher)
* [ECharts](http://echarts.baidu.com/index.html) (`ECharts` 3.4.0)



## Installation

After installing the above dependencies, install `@Rebirth/UI` via: 
  
    npm install --save rebirth-echarts
  
Once installed you need to import our main module.

    import { RebirthEChartsModule } from 'rebirth-echarts';
  
Then use `RebirthEChartsModule` to declare on your feature module:

    @NgModule({
      imports: [CommonModule, FormsModule, RebirthEChartsModule],
      exports: [DemoComponent],
      declarations: [DemoComponent],
      providers: [],
    })
    export class DemoModule {
    
    }

## FAQ


* Please check [github](https://github.com/greengerong/rebirth-echarts/issues) issue for your common problems / solutions.
