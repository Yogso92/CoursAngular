import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MarvelService } from 'src/app/_services/marvel.service';
import { HeroResult } from 'src/app/_models/hero-result';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  private _id: string;
  
  private _context : HeroResult;
  public get context() : HeroResult {
    return this._context;
  }
  public set context(v : HeroResult) {
    this._context = v;
  }
  
  constructor(private route : ActivatedRoute, private service : MarvelService) { 
    this._id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.service.GetHero(this._id).subscribe(data => this.context = data.data.results[0])
  }

}
