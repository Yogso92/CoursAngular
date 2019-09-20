import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {
  
  private _items : string[];
  public get items() : string[] {
    return this._items;
  }
  public set items(v : string[]) {
    this._items = v;
  }
  
  constructor() { 
    this.items = ["test", "yolo", "uwotm8", "angular"]
  }

  ngOnInit() {
  }

}
