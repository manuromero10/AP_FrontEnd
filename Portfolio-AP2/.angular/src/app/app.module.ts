import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContenidoModule } from '@modules/contenido/contenido.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ContenidoModule
  ],
  providers: [
    [],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
