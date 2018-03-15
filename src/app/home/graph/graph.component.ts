import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  options: any;
  color : any = [];
  data1: any = []
  data2: any = []
  sub1 : any;

  constructor(private projectService: ProjectService) {

    this.sub1 = this.projectService.emitGraphData.subscribe(res=>{
      this.data1 = res.data2
      this.data2 = res.data1
      this.getGraph();
    })

  }

  ngOnInit(){}

  getGraph() {
    this.color = ['#67d84c','#5367ff','#99b4f3','#118ebd']

    let xAxisData = this.data2;
    let data1 = this.data1;

    this.options = {
      color: this.color,
      legend: {
        data: [],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
