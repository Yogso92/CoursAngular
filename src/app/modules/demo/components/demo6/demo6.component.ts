import { Component, OnInit } from '@angular/core';
import { Product } from '../../_models/product';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  
  private _products : Product[];
  public get products() : Product[] {
    return this._products;
  }
  public set products(v : Product[]) {
    this._products = v;
  }
  
  constructor() { 
    this.products = [
      {name: "Coca Cola", price: 0.7, id: 1, discount: 10, image: "coca.jpg"},
      {name: "Fanta", price: 0.8, id: 2, discount: 5, image: "fanta.jpeg"},
      {name: "Tropico", price: 1.2, id: 3, discount: 0, image: "tropico.png"}
    ]
  }

  ngOnInit() {
  }

}
