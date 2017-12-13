import { Component, OnInit, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
import { DemoConfigService } from './shared/demo/demo-config.service';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from './shared';
import { MenuBar } from 'rebirth-ng';

@Component({
  selector: 're-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  components: any[];
  gettingStarted: any;
  menus: MenuBar;

  constructor(private viewContainerRef: ViewContainerRef,
              private demoConfigService: DemoConfigService,
              private  router: ActivatedRoute,
              private  themeService: ThemeService,
              private  renderer: Renderer2,
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
      logo: 'http://greengerong.github.io/rebirth/assets/img/wolf2.png',
      title: '破狼博客',
      home: './',
      menus: [
        {
          text: '@Rebirth/ECharts',
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
          text: 'Advance Components',
          icon: 'glyphicon glyphicon-fire',
          children: [
            {
              text: 'Rebirth-ng',
              url: 'https://greengerong.github.io/rebirth-ng/'
            },
            {
              text: 'Rebirth-http',
              url: 'https://github.com/greengerong/rebirth-http'
            },
            {
              text: 'Rebirth-permission',
              url: 'https://github.com/greengerong/rebirth-permission'
            },
            {
              text: 'Rebirth-storage',
              url: 'https://github.com/greengerong/rebirth-storage'
            },
            {
              text: 'Rebirth-event-source',
              url: 'https://github.com/greengerong/rebirth-event-source'
            },
            {
              text: 'Rebirth-chart(Chartjs)',
              url: 'https://greengerong.github.io/rebirth-chart/'
            },
            {
              text: 'Rebirth-echarts(ECharts)',
              url: 'https://greengerong.github.io/rebirth-echarts/'
            },
            {
              text: 'Rebirth seed(rebirth-admin)',
              url: 'https://github.com/greengerong/rebirth-admin'
            },
          ]
        },
        {
          text: 'API Docs',
          url: '/rebirth-echarts//compodocs/overview.html',
          target: '_blank',
          icon: 'glyphicon glyphicon-heart'
        },
        {
          text: '@Github',
          url: 'https://github.com/greengerong/rebirth-echarts',
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
