import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './countries/filters/filters.component';
import { CountryComponent } from './countries/country-list/country/country.component';
import { ThemeChangerComponent } from './header/theme-changer/theme-changer.component';
import { ThemeProviderComponent } from './theme-provider/theme-provider.component';
import {ThemeService} from "./shared/theme.service";
import { CountryListComponent } from './countries/country-list/country-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgOptimizedImage} from "@angular/common";
import { CountryNotFoundComponent } from './country-not-found/country-not-found.component';
import {CountriesService} from "./shared/countries.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryDetailComponent,
    HeaderComponent,
    FiltersComponent,
    CountryComponent,
    ThemeChangerComponent,
    ThemeProviderComponent,
    CountryListComponent,
    CountryNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ThemeService, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
