import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Articolo } from './articolo.model';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent {

  @HostBinding('attr.class') cssClass = "row";
  @Input() articolo!:Articolo;

  constructor() {
    this.articolo = new Articolo("Apple", "iPhone", "google.com", 10);
  }

  miPiace():boolean{
    this.articolo.miPiace();
    return false;
  }

  nonPiace():boolean{
    this.articolo.nonPiace();
    return false;
  }

  getStile():string {
    return this.articolo.getStile();
  }

}
