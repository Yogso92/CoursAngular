import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../../_services/poke-service.service';
import { Pokemon } from '../../_models/pokemon';
import { Observable } from 'rxjs';
import { PokemonType } from '../../_models/pokemon-type';
import { PokeTypeService } from '../../_services/poke-type.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo9pokemons',
  templateUrl: './demo9pokemons.component.html',
  styleUrls: ['./demo9pokemons.component.scss']
})
export class Demo9pokemonsComponent implements OnInit {

  
  private _listPokemon : Observable<Array<Pokemon>>;
  public get listPokemon() : Observable<Array<Pokemon>> {
    return this._listPokemon;
  }
  public set listPokemon(v : Observable<Array<Pokemon>>) {
    this._listPokemon = v;
  }
  
  private _listTypes : Observable<Array<PokemonType>>;
  public get listTypes() : Observable<Array<PokemonType>> {
    return this._listTypes;
  }
  public set listTypes(v : Observable<Array<PokemonType>>) {
    this._listTypes = v;
  }
  
  private _formGroup : FormGroup;
  public get formGroup() : FormGroup {
    return this._formGroup;
  }
  public set formGroup(v : FormGroup) {
    this._formGroup = v;
  }
  
  
  

  constructor(private pokeservice : PokeServiceService, private typeService : PokeTypeService, private formBuilder : FormBuilder) {
    this.formGroup = this.formBuilder.group({
      Name: ['', Validators.required],
      Number : ['', Validators.required],
      Type1Id : ['', Validators.required],
      Type2Id: '',
      Picture: ['']
    })
  }

  ngOnInit() {
    this.listTypes = this.typeService.getAll();
    this.refreshPokemons();
  }

  onSubmit(pokemon : Pokemon){
    console.log(pokemon)
    this.pokeservice.create(pokemon).subscribe((data) => this.refreshPokemons());
  }

  onPictureChanged(event){
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', (e) => {
      let blob = e.target['result'].toString().split(',')[1];
      this.formGroup.controls['Picture'].setValue(blob);
      console.log(blob)
    })
    reader.readAsDataURL(file);
  }

  refreshPokemons(){
    this.listPokemon = this.pokeservice.getAll();
  }

}
