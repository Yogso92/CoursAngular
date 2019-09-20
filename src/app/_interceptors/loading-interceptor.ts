import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../_services/loader.service';
import {finalize} from 'rxjs/operators'
import { Injectable } from '@angular/core';



@Injectable(
  
)
export class LoadingInterceptor implements HttpInterceptor{
    
    constructor(private loadingService : LoaderService){}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        this.loadingService.show();
        console.log(1)
        return next.handle(req).pipe(finalize(() => {this.loadingService.hide()
        console.log(2)}) )

      }

      
}