import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Educacion } from 'src/app/models/educacion';
import { catchError, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EduAdminService {

  private URL = environment.api;

  constructor(private HttpClient:HttpClient) { }

  getEducacion():Observable<any>{
    return this.HttpClient.get<Educacion[]>(
      `${this.URL}/educacion/lista`).pipe(
        catchError(() => {
          console.log('Algo ocurrio!!')
          return of([])
        })

    )
  }

  
  deleteEducacion(id: number) {
    return this.HttpClient.delete(
      `${this.URL}/educacion/delete/`+id);
  }

  saveEducacion(educacion: Educacion) {
    return this.HttpClient.post(
      `${this.URL}/educacion/new`, educacion);
  }

  updateEducacion(educacion: Educacion){
    return this.HttpClient.put (
      `${this.URL}/educacion/edit`, educacion);
  }
  
}
