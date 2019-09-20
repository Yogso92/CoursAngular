import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { Exo3Component } from './components/exo3/exo3.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"exo1",
    component: Exo1Component
  },
  {
    path: "exo2",
    component: Exo2Component
  },
  {
    path: 'exo3', 
    component: Exo3Component
  },
  {path: 'hero-detail/:id', component: HeroDetailComponent},

  { path: 'demo', loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
