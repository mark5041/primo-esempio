import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessaggioComponent } from './admin/messaggio/messaggio.component';
import { UtenteComponent } from './admin/utente/utente.component';
import { UtenteListComponent } from './admin/utente-list/utente-list.component';
import { ArticoloComponent } from './admin/articolo/articolo.component';

@NgModule({
  declarations: [
    AppComponent,
    MessaggioComponent,
    UtenteComponent,
    UtenteListComponent,
    ArticoloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
