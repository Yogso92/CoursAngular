import { Injectable } from '@angular/core';
import { PokemonType } from '../_models/pokemon-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeTypeService {

  constructor(private httpClient : HttpClient) { }

  create(type: PokemonType) : Observable<number>{
    return this.httpClient.post<number>('http://localhost:50596/api/type', type)
  }
  getAll() : Observable<Array<PokemonType>>{
    return this.httpClient.get<Array<PokemonType>>('http://localhost:50596/api/type')
  }
}
