import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1:string[] = ['papa','cebolla' , 'tomate'];
  public data1 = [[500,300,200],];

  public titulo2="sumarios"
  public labels2:string[]= ['abiertos','cerrados', 'en tramite'];
  public data2 = [[12,300,50],];
}
