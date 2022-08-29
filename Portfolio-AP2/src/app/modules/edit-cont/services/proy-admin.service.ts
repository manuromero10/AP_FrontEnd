import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Proyecto } from 'src/app/models/proyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyAdminService {

  private URL = environment.api;

  constructor(private HttpClient:HttpClient) { }

  getProyecto():Observable<any>{
    return this.HttpClient.get(
      `${this.URL}/proyecto/lista`).pipe(
        catchError(() => {
          console.log('Algo ocurrio!!')
          return of([])
        })

    )
  }

  deleteProyecto(id: number) {
    return this.HttpClient.delete(
      `${this.URL}/proyecto/delete/`+id);
  }

  saveProyecto(proyecto: Proyecto) {
    return this.HttpClient.post(
      `${this.URL}/proyecto/new`, proyecto);
  }

  updateProyecto(proyecto: Proyecto){
    return this.HttpClient.put (
      `${this.URL}/proyecto/edit`, proyecto);
  }
  
}
