import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HeroesResult } from '../_models/heroesResult';
import { HttpClient } from '@angular/common/http';
import { HeroResult, Results } from '../_models/hero-result';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private _endPoint : string = environment.marvelApi+"characters";
  constructor(private httpClient : HttpClient) { }
  getHeroList(limit:number = 20, offset: number = 0) : Observable<HeroesResult>{
    
    return this.httpClient.get<HeroesResult>(this._endPoint+"?offset="+offset.toString()+"&limit="+limit.toString());
  }
  GetHero(id: string = "1") : Observable<Results>{
    return this.httpClient.get<Results>(this._endPoint+"/"+id.toString())
  }

}
