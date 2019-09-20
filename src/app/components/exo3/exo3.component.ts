import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/_services/marvel.service';
import { HeroesResult } from 'src/app/_models/heroesResult';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  
  private _herosResult : HeroesResult;
  public get herosResult() : HeroesResult {
    return this._herosResult || null;
  }
  public set herosResult(v : HeroesResult) {
    this._herosResult = v;
  }
  
  private _nbPerPage : number;
  public get nbPerPage() : number {
    return this._nbPerPage;
  }
  public set nbPerPage(v : number) {
    this._nbPerPage = v;
  }
  
  
  constructor(private marvelService: MarvelService, private dialogService: NbDialogService) { 
    this.marvelService.getHeroList().subscribe(data => this.herosResult = data);
    this.nbPerPage = 20
  }
  next(){
    this.marvelService.getHeroList(this.nbPerPage, this.herosResult.data.offset+this.nbPerPage).subscribe(data => this.herosResult = data);
  }
  previous(){
    let offset : number = this.herosResult.data.offset-this.nbPerPage;
    offset = (offset < 0) ? offset = 0 : offset;
    this.marvelService.getHeroList(this.nbPerPage, offset).subscribe(data => this.herosResult = data);
  }
  detail(){
    
  }

  ngOnInit() {
  }

}
