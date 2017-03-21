import { Component, OnInit, ViewContainerRef, Renderer, ElementRef } from '@angular/core';
import { DemoConfigService } from './shared/demo/demo-config.service';
import { RebirthChartConfig } from './exports/rebirth-chart.config';
import { REBIRTH_CHART_I18N_ZHCN } from './exports/rebirth-chart.i18n.zh-cn';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from './shared';
import { MenuBar } from 'ng2-rebirth-ui';

@Component({
  selector: 're-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  components: any[];
  gettingStarted: any;
  menus: MenuBar;

  constructor(private rebirthChartConfig: RebirthChartConfig,
              private viewContainerRef: ViewContainerRef,
              private demoConfigService: DemoConfigService,
              private  router: ActivatedRoute,
              private  themeService: ThemeService,
              private  renderer: Renderer,
              private elementRef: ElementRef) {

    this.router.queryParams.subscribe((params: any) => {
      this.themeService.setupTheme(params.theme, this.renderer, this.elementRef);
    });
  }

  ngOnInit(): void {
    this.gettingStarted = this.demoConfigService.gettingStarted;
    this.components = this.demoConfigService.components
      .sort((a, b) => a.name.localeCompare(b.name));

    this.setupMenus();
  }

  private setupMenus() {
    const cmpMenus = this.components.map(item => {
      return {
        text: item.name,
        url: `#${item.name}`
      };
    });

    this.menus = {
      logo: 'http://greengerong.com/rebirth/assets/img/wolf2.png',
      title: '破狼博客',
      home: './',
      menus: [
        {
          text: '@Rebirth/Chart',
          router: ['./'],
          icon: 'glyphicon glyphicon-home'
        },
        {
          text: 'Components',
          children: [
            {
              text: 'Line Chart',
              url: '#line'
            },
            {
              text: 'Bar Chart',
              url: '#bar'
            },
            {
              text: 'Radar Chart',
              url: '#radar'
            },
            {
              text: 'Instrument Chart',
              url: '#instrument'
            },
            {
              text: 'Pie Chart',
              url: '#pie'
            },
            {
              text: 'Doughnut Chart',
              url: '#doughnut'
            },
            {
              text: 'Bubble Chart',
              url: '#bubble'
            }
          ],
          icon: 'glyphicon glyphicon-fire'
        },
        {
          text: 'API Docs',
          url: '/rebirth-chart/compodocs/overview.html',
          target: '_blank',
          icon: 'glyphicon glyphicon-heart'
        },
        {
          text: '@Github',
          url: 'https://github.com/greengerong/rebirth-chart',
          target: '_blank',
          icon: 'glyphicon glyphicon-user'
        },
        {
          text: 'Themes',
          icon: 'glyphicon glyphicon-cog',
          children: [
            {
              text: 'Default',
              url: '?theme=Default'
            },
            {
              text: 'Dark',
              url: '?theme=Dark'
            },
            {
              text: 'Cosmo',
              url: '?theme=Cosmo'
            },
            {
              text: 'Paper',
              url: '?theme=Paper'
            },
            {
              text: 'Journal',
              url: '?theme=Journal'
            },
            {
              text: 'Readable',
              url: '?theme=Readable'
            },
            {
              text: 'United',
              url: '?theme=United'
            },
            {
              text: 'Sandstone',
              url: '?theme=Sandstone'
            }
          ]
        }
      ]
    };
  }
}
