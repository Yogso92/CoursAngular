import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PokemonType } from '../../_models/pokemon-type';
import { PokeTypeService } from '../../_services/poke-type.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  
  private _typeForm : FormGroup;
  public get typeForm() : FormGroup {
    return this._typeForm;
  }
  public set typeForm(v : FormGroup) {
    this._typeForm = v;
  }
  
  private _listeTypes : Observable<Array<PokemonType>>;
  public get listeTypes() : Observable<Array<PokemonType>> {
    return this._listeTypes;
  }
  public set listeTypes(v : Observable<Array<PokemonType>>) {
    this._listeTypes = v;
  }
  
  
  constructor(private pokeTypeService : PokeTypeService) { 
    this.typeForm = new FormGroup({
      Name: new FormControl(null, {validators : [
        Validators.required
      ]})
    })
  }

  ngOnInit() {
    this.RefreshTypes()
  }
  onSubmit(type: PokemonType){
    this.pokeTypeService.create(type).subscribe((data : number) => {
      //afficher un message de succes
      this.RefreshTypes()
    });
    
  }
  RefreshTypes(){
    this.listeTypes = this.pokeTypeService.getAll();
  }

}
