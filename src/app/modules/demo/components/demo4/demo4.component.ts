import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  
  private _show : boolean;
  public get show() : boolean {
    return this._show;
  }
  public set show(v : boolean) {
    this._show = v;
  }
  
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.show = !this.show;
  }

}
