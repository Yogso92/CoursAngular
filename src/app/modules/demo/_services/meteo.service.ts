import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherNow } from '../_models/weather';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})



export class MeteoService {
  private _endPoint: string = "https://api.openweathermap.org/data/2.5/weather?lat=__lat__&lon=__long__&appid=__key__&units=metric";

  constructor(private httpClient: HttpClient) { 
    
  }

  getNow(lat: number, long: number): Observable<WeatherNow>{
    let request = this._endPoint.replace('__lat__', lat.toString())
                                .replace('__long__', long.toString())
                                .replace('__key__', environment.meteoKey)
    return this.httpClient.get<WeatherNow>(request);
    
  }

}
