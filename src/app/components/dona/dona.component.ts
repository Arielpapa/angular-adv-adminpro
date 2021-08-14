import { Component, Input, OnInit } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

 @Input() title:string = 'sin titulo';

 @Input('labels') doughnutChartLabels: Label[] = ['label1', 'label2', 'label3'];
 @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    
  ];
  // public doughnutChartType: ChartType = 'doughnut';

  @Input('colores') colors:Color []=[{
    backgroundColor:['#9E120E', '#FF5800', '#FFB414']
  }
  // public colors:Color []=[{
  //   backgroundColor:['#9E120E', '#FF5800', '#FFB414']
  // }

  ];

  

}
