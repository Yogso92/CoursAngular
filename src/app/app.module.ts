import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbInputModule, NbListModule, NbCardModule, NbIconModule, NbDialogModule, NbSpinnerModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { FormsModule } from '@angular/forms';
import { Ex2ConfirmDialogComponent } from './components/ex2-confirm-dialog/ex2-confirm-dialog.component';
import { Exo3Component } from './components/exo3/exo3.component';
import { MarvelService } from './_services/marvel.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarvelInterceptor } from './_interceptors/marvel-interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { LoadingInterceptor } from './_interceptors/loading-interceptor';
import { LoaderService } from './_services/loader.service';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    Exo1Component,
    Exo2Component,
    Ex2ConfirmDialogComponent,
    Exo3Component,
    LoaderComponent,
    HeroDetailComponent
  ],
  entryComponents: [
    Ex2ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    FormsModule,
    NbListModule,
    NbCardModule,
    NbIconModule,
    NbDialogModule.forRoot(),
    HttpClientModule,
    NbSpinnerModule,
    NbUserModule
  ],
  providers: [
    MarvelService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MarvelInterceptor,
      multi: true // allows multiple interceptors
    }, 
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true // allows multiple interceptors
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
