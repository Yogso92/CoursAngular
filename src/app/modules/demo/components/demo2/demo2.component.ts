import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  
  private _prop1 : number;
  public get prop1() : number {
    return this._prop1;
  }
  public set prop1(v : number) {
    this._prop1 = v;
  }
  
  private _prop2 : number;
  public get prop2() : number {
    return this._prop2;
  }
  public set prop2(v : number) {
    this._prop2 = v;
  }
  
  onAdd(){
    this.prop2 += 1;
  }
  onRemove(){
    this.prop2 -= 1;
  }
  onMouseOver(){
    this.prop1 +=1;
  }
  
  constructor() {
    this.prop1 = 0;
    this.prop2 = 0;
   }

  ngOnInit() {
  }

}
