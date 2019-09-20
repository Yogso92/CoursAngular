import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';



export class MarvelInterceptor implements HttpInterceptor{ // intercepts requests containing marvelApi url and adds parameters. Api security handled in one place
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        if(req.url.includes(environment.marvelApi)){
          let t = (new Date).getTime().toString();
          let hash = (new Md5).appendStr(t + environment.marvelPrivateKey + environment.marvelKey).end().toString();
          const newRequest = req.clone({setParams: {
            'ts': t,
            'apikey': environment.marvelKey,
            'hash': hash
          }}); //automatically adds parameters in request
          console.log(newRequest.urlWithParams)
          return next.handle(newRequest);
        }
        return next.handle(req);
      }
}