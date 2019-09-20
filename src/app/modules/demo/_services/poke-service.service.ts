import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../_models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor(private client : HttpClient) { }

  create(pokemon : Pokemon) : Observable<number>{
    return this.client.post<number>('http://localhost:50596/api/pokemon', pokemon)
  }
  getAll() : Observable<Array<Pokemon>>{
    return this.client.get<Array<Pokemon>>('http://localhost:50596/api/pokemon');
  }
}
