import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/_services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }
  
  
  public get isLoading() : Subject<boolean> {
    return this.loaderService.isLoading;
  }
  
  
  ngOnInit() {
  }

}
