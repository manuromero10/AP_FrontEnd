import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  personaEmitter = new EventEmitter();

  private URL = environment.api;

  constructor(private HttpClient:HttpClient) { }



  getPersona():Observable<any>{
    return this.HttpClient.get(
      `${this.URL}/persona/lista`).pipe(
        catchError(() => {
          console.log('Algo ocurrio!!')
          return of([])
        })

    )
  }

}
