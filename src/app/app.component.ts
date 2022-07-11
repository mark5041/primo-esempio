import { Component } from '@angular/core';
import { Articolo } from './admin/articolo/articolo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titolo = 'primo-esempio';
  
  articoli:Articolo[];

  constructor() {
    this.articoli = [
      new Articolo("Samsung", "S20", "google.com", 8),
      new Articolo("HP", "Pavilion", "google.com", 5),
      new Articolo("NVIDIA", "GTX3090", "google.com", 7)
    ];
  }

  aggiungiArticolo(
    marca:HTMLInputElement,
    modello:HTMLInputElement,
    link:HTMLInputElement):boolean {
    this.articoli.push(new Articolo(marca.value, modello.value, link.value)),
    marca.value = "";
    modello.value = "";
    link.value = "";
    return false;
  }
}
