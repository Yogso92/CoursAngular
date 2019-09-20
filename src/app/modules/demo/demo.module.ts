import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';
import { Demo4Component } from './components/demo4/demo4.component';
import { Demo5Component } from './components/demo5/demo5.component';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbInputModule, NbListModule, NbCardModule, NbIconModule, NbDialogModule, NbTabsetModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Demo6Component } from './components/demo6/demo6.component';
import { Demo7Component } from './components/demo7/demo7.component';
import { HttpClientModule } from '@angular/common/http';
import { Demo8Component } from './components/demo8/demo8.component';
import { MeteoService } from './_services/meteo.service';
import { Demo9Component } from './components/demo9/demo9.component';
import { PokeTypeService } from './_services/poke-type.service';
import { Demo9tabsComponent } from './components/demo9tabs/demo9tabs.component';
import { Demo9pokemonsComponent } from './components/demo9pokemons/demo9pokemons.component';
import { PokeServiceService } from './_services/poke-service.service';


@NgModule({
  declarations: [DemoComponent, Demo1Component, Demo2Component, Demo3Component, Demo4Component, Demo5Component, Demo6Component, Demo7Component, Demo8Component, Demo9Component, Demo9tabsComponent, Demo9pokemonsComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    NbListModule,
    NbCardModule,
    NbIconModule,
    HttpClientModule,
    NbDialogModule.forChild(),
    ReactiveFormsModule,
    NbTabsetModule,
    NbSelectModule,
    NbUserModule
  ],
  providers: [
    MeteoService,
    PokeTypeService,
    PokeServiceService, 
    FormBuilder
  ]
})
export class DemoModule { }
