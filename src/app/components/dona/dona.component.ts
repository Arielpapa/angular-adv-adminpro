import { Component, Input, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input()title: string ='sin titulo';
  
  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'lebel2', 'label3'];
  @Input ('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    
  ];
  public color: Color[]= [
    {backgroundColor: [ '#6857E6','#0009FEE','#F02059']}
  ];

}
