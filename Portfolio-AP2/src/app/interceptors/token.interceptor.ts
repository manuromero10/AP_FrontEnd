import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.cookieService.get('token_session');
    const currentRequest = request.clone(
      {
        setHeaders: {
          authorization: `Bearer Bearer ${token}`
        }
      }
    )

    request = currentRequest;
    return next.handle(request);  
  }
}

/* const currentRequest = request.clone(
      {
        setHeaders: {
          authorization: `Bearer Bearer ${token}`
        }
      }
    )

    request = currentRequest;
    return next.handle(request); 



    let modifiedrequest = request.clone({
        headers: request.headers.append('authorization', `Bearer Bearer ${token}`)
      });
    return next.handle(modifiedrequest); 
    */

