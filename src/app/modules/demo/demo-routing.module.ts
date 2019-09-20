import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo5Component } from './components/demo5/demo5.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';
import { Demo4Component } from './components/demo4/demo4.component';
import { Demo6Component } from './components/demo6/demo6.component';
import { Demo7Component } from './components/demo7/demo7.component';
import { Demo8Component } from './components/demo8/demo8.component';
import { Demo9tabsComponent } from './components/demo9tabs/demo9tabs.component';

const routes: Routes = [{ path: '', component: DemoComponent, children: [
  {path: 'demo1', component: Demo1Component},
  {path: 'demo2', component: Demo2Component},
  {path: 'demo3', component: Demo3Component},
  {path: 'demo4', component: Demo4Component},
  {path: 'demo5', component: Demo5Component},
  {path: 'demo6', component: Demo6Component},
  {path: 'demo7', component: Demo7Component},
  {path: 'demo8', component: Demo8Component},
  {path: 'demo9', component: Demo9tabsComponent },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
