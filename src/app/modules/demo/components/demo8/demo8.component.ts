import { Component, OnInit } from '@angular/core';
import { WeatherNow } from '../../_models/weather';
import { MeteoService } from '../../_services/meteo.service';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {
  
  private _lat : number;
  public get lat() : number {
    return this._lat;
  }
  public set lat(v : number) {
    this._lat = v;
  }
  
  private _long : number;
  public get long() : number {
    return this._long;
  }
  public set long(v : number) {
    this._long = v;
  }
  
  
  
  private _now : WeatherNow;
  public get now() : WeatherNow {
    return this._now;
  }
  public set now(v : WeatherNow) {
    this._now = v;
  }
  
  constructor(private meteoService: MeteoService) {
    this.showWeather(50.274, 5.062)
  }
  
  showWeather(lat: number, long: number){
    this.meteoService.getNow(lat, long).subscribe((data => {this._now = data; console.log(this._now)}));

  }

  ngOnInit() {
  }

}
