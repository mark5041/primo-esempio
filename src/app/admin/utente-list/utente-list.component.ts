import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utente-list',
  templateUrl: './utente-list.component.html',
  styleUrls: ['./utente-list.component.css']
})
export class UtenteListComponent implements OnInit {

  nominativi:string[];
  constructor() {
    this.nominativi = ["Mario Rossi", "Sandro Donato", "Max Duedita"]
  }

  ngOnInit(): void {
  }

}
