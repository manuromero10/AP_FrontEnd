import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.api;

  admin: boolean = false;


  constructor( private httpClient:HttpClient, private cookieService:CookieService) { }

  submitLogin(credentials:{nombreUsuario:string, password:string}):Observable<any> {
    return this.httpClient.post(
      `${this.URL}/auth/login`,credentials)
      .pipe(
        tap((stream:any) => {
          const {token} = stream;

          this.cookieService.set('token_session',token,{
          path:'/'
          });
          this.cookieService.get('token_session');
        }),
        catchError(() => {
          console.log('Algo ocurrio!!')
          return of([])
        })
      )
  }

  logOut() {
    this.cookieService.delete('token_session');
  }

  checkCookie() {
    const cookieExists: boolean = this.cookieService.check('token_session');
    this.admin = cookieExists;
  }
}
