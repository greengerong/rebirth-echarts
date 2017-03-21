import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  ElementRef,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 're-echarts',
  template: '',
  host: {
    '[style.display]': '"block"',
    '[style.width]': 'width',
    '[style.height]': 'height'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'chart'
})
export class EChartsComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input() options: echarts.Option;
  @Input() width = '100%';
  @Input() height = '400px';
  @Output() chartCreated = new EventEmitter<EChartsComponent>();
  chart: any;
  // event: 'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup'、'mouseover'、'mouseout'

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.chart = echarts.init(this.elementRef.nativeElement);
    this.updateChartData(this.options);
    this.chartCreated.emit(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart && changes['options']) {
      const currentValue = changes['options'].currentValue;
      this.updateChartData(currentValue);
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  updateChartData(options: echarts.Option) {
    if (options) {
      this.chart.setOption(options);
    }
  }
}
