import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels1:string []= ['ariel','matias','papa'];
  public labels2:string []= ['Ingrid','sofia','nawrot'];

  public data1 = [
    [123,456,1023]
  ];
  public data2 = [
    [500,45,1023]
  ];
  
  public colors1 =
  [{
    backgroundColor:['green', 'black', 'violet']
  }]
  public colors2 =
  [{
    backgroundColor:['red', 'blue', 'yellow']
  }]
}
