import {Component, Input} from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {CountriesService} from "../../shared/countries.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  searchIcon: IconDefinition = faMagnifyingGlass;
  searchValue: string = "";
  searchRegion: string = ""

  constructor(private countriesService: CountriesService){}

  onSearch(){
    this.searchRegion = "";
    this.countriesService.filterBySearch(this.searchValue);
  }

  onRegionSelected(event: string){
    this.countriesService.filterByRegion(event);
  }
}
