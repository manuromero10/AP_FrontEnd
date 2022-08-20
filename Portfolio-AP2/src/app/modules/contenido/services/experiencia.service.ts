import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  private URL = environment.api;

  constructor(private HttpClient:HttpClient) { }

  getExperiencia():Observable<any>{
    return this.HttpClient.get(
      `${this.URL}/experiencia/lista`).pipe(
        catchError(() => {
          console.log('Algo ocurrio!!')
          return of([])
        })

    )
  }
}
