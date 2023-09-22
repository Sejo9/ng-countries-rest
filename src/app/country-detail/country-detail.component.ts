import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";
import {CountriesService} from "../shared/countries.service";
import {CountryModel} from "../shared/country.model";
import {filter, Subscription} from "rxjs";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit, OnDestroy {
  backIcon: IconDefinition = faArrowLeftLong;
  country: CountryModel;
  countriesSub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private countriesService: CountriesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(countryParam => {

      if(!this.countriesService.countries.value){
        this.countriesService.fetchAllCountries();
      }

      /* if(this.countriesService.wasfiltered){
        this.countriesService.fetchAllCountries();
      } */

      this.countriesSub = this.countriesService.countries.subscribe(countries => {

        if(this.countriesService.countries.value){
          let filtered = countries.filter(countryData => countryData.countryName === countryParam.name);

          if(filtered.length === 0){
            this.router.navigate(['country-not-found']).then(r => console.log('Country Not Found In Detail Component!. Redirected back to home:'+r));
          }

          this.country = filtered[0];
        }
      })
    });
  }

  onNavigateBack() {
    this.router.navigate(['']).then(r => console.log("Navigated back to home: " + r));
  }

  onNavigateToBorderCountry(border: string) {
    this.router.navigate(['country', border]).then(r => console.log("Navigated to border country:"+r))
  }

  ngOnDestroy() {
    this.countriesSub.unsubscribe();
  }
}
