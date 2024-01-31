import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class RequestHeaderInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler){
    const authRequest = request.clone({setHeaders: {'content-type': 'application/json'}});
    return next.handle(authRequest);
  }
}
