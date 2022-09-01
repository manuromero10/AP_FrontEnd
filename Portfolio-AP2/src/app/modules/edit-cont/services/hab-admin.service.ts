import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Habilidad } from 'src/app/models/habilidad';
import { catchError, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HabAdminService {

  private URL = environment.api;

  constructor(private HttpClient:HttpClient) { }

  getHabilidad():Observable<any>{
    return this.HttpClient.get<Habilidad[]>(
      `${this.URL}/habilidad/lista`).pipe(
        catchError(() => {
          console.log('Algo ocurrio!!')
          return of([])
        })

    )
  }

  
  deleteHabilidad(id: number) {
    return this.HttpClient.delete(
      `${this.URL}/habilidad/delete/`+id);
  }

  saveHabilidad(habilidad: Habilidad) {
    return this.HttpClient.post(
      `${this.URL}/habilidad/new`, habilidad);
  }

  updateHabilidad(habilidad: Habilidad){
    return this.HttpClient.put (
      `${this.URL}/habilidad/edit`, habilidad);
  }
  
}
