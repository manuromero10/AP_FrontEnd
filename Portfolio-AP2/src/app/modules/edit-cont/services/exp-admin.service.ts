import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Experiencia } from 'src/app/models/experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpAdminService {
  
  private URL = environment.api;

  constructor(private HttpClient:HttpClient) { }

  getExperiencia():Observable<any>{
    return this.HttpClient.get<Experiencia[]>(
      `${this.URL}/experiencia/lista`).pipe(
        catchError(() => {
          console.log('Algo ocurrio!!')
          return of([])
        })

    )
  }

  deleteExperiencia(id: number) {
    console.log('elimino', id)
    return this.HttpClient.delete(
      `${this.URL}/experiencia/delete/`+id);
  }

  saveExperiencia(experiencia: Experiencia) {
    return this.HttpClient.post(
      `${this.URL}/experiencia/new`, experiencia);
  }

  updateExperiencia(experiencia: Experiencia){
    return this.HttpClient.put (
      `${this.URL}/experiencia/edit`, experiencia);
  }
}
