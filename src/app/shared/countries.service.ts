import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {CountryModel, CountryResponse} from "./country.model";
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class CountriesService {

  countries = new BehaviorSubject<CountryModel[]>(null);
  filteredCountries = new BehaviorSubject<CountryModel[]>(null);

  url: string = "https://restcountries.com/v3.1/all";
  searchValue: string = "";
  wasfiltered: boolean = false;

  constructor(private http: HttpClient) {}

  fetchAllCountries() {
    this.http.get<CountryResponse[]>(this.url)
      .pipe(map(responseData => {
        let newCountries: CountryModel[] = [];

        for (let countryData of responseData) {
          let nativeName = ""
          let capitals = ""
          let currencies = ""
          let borders: string[] = []
          let languages = ""

          for (let key in countryData.name.nativeName) {
            nativeName = countryData.name.nativeName[key].common;
          }

          if (countryData.capital) {
            for (let cap of countryData.capital) {
              capitals = capitals === "" ? cap : capitals + ', ' + cap;
            }
          }

          for (let key in countryData.currencies) {
            currencies = currencies === "" ? countryData.currencies[key].name : currencies + ", " + countryData.currencies[key].name;
          }

          for (let key in countryData.languages) {
            languages = languages === "" ? countryData.languages[key] : languages + ", " + countryData.languages[key];
          }

          if(countryData.borders){
            for (let code of countryData.borders) {
              let filteredBorders = responseData.filter(response => response.cca3 === code);
              if (filteredBorders.length > 0) {
                borders.push(filteredBorders[0].name.common)
              }
            }
          }

          let country: CountryModel = {
            flag: countryData.flags.svg,
            countryName: countryData.name.common,
            nativeName: nativeName,
            population: countryData.population,
            capital: capitals,
            region: countryData.region,
            subRegion: countryData.subregion,
            code: countryData.cca3,
            topLevelDomain: countryData.tld ? countryData.tld[0] : "",
            currencies: currencies,
            languages: languages,
            borders: borders
          }

          newCountries.push(country);
        }

        return newCountries;

      }))
      .subscribe(countriesData => {
        this.wasfiltered = false;
        this.countries.next(countriesData);
      })
  }

  filterBySearch(name: string){
    this.searchValue = name;
    if(name === ""){
      this.fetchAllCountries();
    }else{
      let filtered = this.countries.value.filter(country => country.countryName.toLowerCase().includes(name.toLowerCase()))
      this.filteredCountries.next(filtered);
      this.wasfiltered = true;
    }
  }

  filterByRegion(region:string){
    if(this.searchValue === ""){
      let filtered = this.countries.value.filter(country => country.region.toLowerCase() === region.toLowerCase())
      this.filteredCountries.next(filtered);
      this.wasfiltered = true;
    }else if(this.searchValue !== ""){
      let filtered = this.countries.value.filter(country => country.countryName.toLowerCase().includes(this.searchValue.toLowerCase()));
      let regionFiltered = filtered.filter(country => country.region.toLowerCase() === region.toLowerCase());
      this.filteredCountries.next(regionFiltered);
      this.wasfiltered = true;
    }
  }
}
