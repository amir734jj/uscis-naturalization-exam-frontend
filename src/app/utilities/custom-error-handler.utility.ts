import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {tap} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';
import {ignoreMatchingHttpErrorResponse} from '../constants/intercept-ignore';

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptor implements HttpInterceptor {

  static _onErrorHandlers: Array<(HttpErrorResponse) => void> = [];

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(() => { }, err => {
          if (err instanceof HttpErrorResponse && err.status !== 0 && ignoreMatchingHttpErrorResponse(err)) {
            // do error handling here
            RequestInterceptor._onErrorHandlers.forEach(x => x(err));
          }
        })
      );
  }

  addOnErrorHandler(handler: (HttpErrorResponse) => void) {
    RequestInterceptor._onErrorHandlers.push(handler);
  }

}
