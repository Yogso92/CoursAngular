import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {
  
  private _prop : number;
  public get prop() : number {
    return this._prop;
  }
  public set prop(v : number) {
    this._prop = v;
  }
  
  private _observer : Observable<number>;
  public get observer() : Observable<number> {
    return this._observer;
  }
  public set observer(v : Observable<number>) {
    this._observer = v;
  }
  
  
  constructor() { 
    this.prop = 0;
    this.observer = new Observable<number>((obs) => {
      let compt = 0
      setInterval(() => {
        //renvoyé par le observable dans le data du subscribe
        obs.next(++compt);
        if(compt == 5){
          obs.complete()
        }
      }, 3000);

    });
    this.observer.subscribe((data) => {
      this.prop = data
    })
  }

  ngOnInit() {
  }

}
