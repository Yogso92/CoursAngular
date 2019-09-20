import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items: NbMenuItem[] =  [
    {title: "Home", icon: "home", link: "/home"},
    {title: "About", icon: "", link: "/about"},
    {title: "Exercices", icon: 'star', children: [
      {title: "Exercice 1", icon: "", link: "/exo1"},
      {title: "Exercice 2", icon: "", link: "/exo2"},
      {title: 'Exercice3: Marvel', icon: '', link: '/exo3'},
      ]
    },
    {title: 'Demo', icon: 'sun', children: [
      {title: "Binding one way", icon: "", link: "/demo/demo1"},
      {title: "Events", icon: "", link: "/demo/demo2"},
      {title: "Binding two way", icon: "", link: "/demo/demo3"},
      {title: "ngIf", icon: "", link: "/demo/demo4"},
      {title: "ngFor", icon: "", link: "/demo/demo5"},
      {title: "Models", icon: "", link: "/demo/demo6"},
      {title: "Observable", icon:'', link: "/demo/demo7"},
      {title: "Meteo", icon:'', link: "/demo/demo8"},
      {title: 'Reactive Forms', icon: '', link: '/demo/demo9'},
    ]}
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
