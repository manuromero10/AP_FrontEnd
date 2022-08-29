import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerAdminService {

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

  updatePersona(persona: Persona){
    return this.HttpClient.put (
      `${this.URL}/persona/edit`, persona);
  }
}
