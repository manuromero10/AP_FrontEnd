import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContenidoModule } from '@modules/contenido/contenido.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ContenidoModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    
    {
      useClass:TokenInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi:true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
