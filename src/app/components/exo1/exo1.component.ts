import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {

  private maVariable: number ;

	public get IsStarted(): boolean {
		return this.isStarted;
	}

	public set IsStarted(value: boolean) {
		this.isStarted = value;
	}
  private isStarted: boolean;
  private interval: any;
  public get MaVariable(){
    return this.maVariable;
  }
  public set MaVariable(value: number){
    this.maVariable = value;
  }
  start(){
    this.IsStarted = true;
    this.interval = setInterval(() => {this.maVariable += 1}, 1000);
    
  }
  stop(){
    clearInterval(this.interval);
    this.IsStarted = false
  }
  reset(){
    this.MaVariable = 0
  }

  constructor() {
    this.MaVariable = 0;
    this.IsStarted = false;
    this.start()
   }

  ngOnInit() {
    
  }

}
