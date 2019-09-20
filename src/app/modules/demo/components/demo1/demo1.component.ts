import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {
  
  private _value : string;
  public get value() : string {
    return this._value;
  }
  public set value(v : string) {
    this._value = v;
  }
  


  constructor() { 
    this.value = "world"
    setTimeout(() => this.value = "yogso", 2000)
  }

  ngOnInit() {
  }

}
