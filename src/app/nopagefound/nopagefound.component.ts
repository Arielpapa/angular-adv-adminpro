import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['/nopagefoud.component.css']
})
export class NopagefoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
year = new Date().getFullYear();

}
