import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  
  
  private _isLoading : Subject<boolean>;
  public get isLoading() : Subject<boolean> {
    return this._isLoading;
  }
  public set isLoading(v : Subject<boolean>) {
    console.log("yolo")
    this._isLoading = v;
  }
  
  constructor() {
    this._isLoading = new Subject<boolean>();
   }

  hide(){
    this.isLoading.next(false);
  }
  show(){
    this.isLoading.next(true);
  }
}
