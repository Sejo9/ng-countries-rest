import {Component, OnDestroy, OnInit} from '@angular/core';
import {CountryModel} from "../../shared/country.model";
import {CountriesService} from "../../shared/countries.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, OnDestroy {
  countries: CountryModel[] = [];
  countriesSub: Subscription;
  filteredCountriesSub: Subscription;
  isLoading = false;
  noAvailableCountries = true;

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit() {
    this.filteredCountriesSub = this.countriesService.filteredCountries.subscribe(data => {
      this.countries = data;
    });
    this.countriesSub = this.countriesService.countries.subscribe(data => {
      this.countries = data;
    });
    if(!this.countriesService.countries.value){
      this.countriesService.fetchAllCountries();
      this.isLoading = true;
    }
  }


  ngOnDestroy() {
    this.countriesSub.unsubscribe();
    if(this.filteredCountriesSub){
      this.filteredCountriesSub.unsubscribe();
    }
  }
}
