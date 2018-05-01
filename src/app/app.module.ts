import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { RegionComponent } from './region/region.component';

import { RouterModule, Router } from '@angular/router';
import { CountryServService } from './country-serv.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { CurrencyComponent } from './currency/currency.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    RegionComponent,
    CurrencyComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,HttpModule,
    RouterModule.forRoot([
      {path:'region',component:RegionComponent},
      {path:'country',component:CountryComponent},
      {path:'currency',component:CurrencyComponent}

    ])
  ],
  providers: [CountryServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
