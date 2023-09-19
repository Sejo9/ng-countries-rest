import {Component, Input, OnInit} from '@angular/core';
import {CountryModel} from "../../../shared/country.model";
import {Router} from "@angular/router";
import {CountriesService} from "../../../shared/countries.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent{
  @Input() country: CountryModel;

  constructor(private router: Router, private countriesService: CountriesService) {
  }
  onClick(){
    this.router.navigate(['country', this.country.countryName]).then(r => console.log("Navigated to Country Detail: "+r))
  }
}
