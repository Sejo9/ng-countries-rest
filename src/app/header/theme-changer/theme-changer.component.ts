import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../shared/theme.service";
import {faMoon as darkMoon} from "@fortawesome/free-solid-svg-icons";
import {faMoon as lightMoon, IconDefinition} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.css']
})
export class ThemeChangerComponent implements OnInit{

  moonIcon: IconDefinition = darkMoon;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.themeService.darkThemeSubject.subscribe(active => {
      this.moonIcon = active ? lightMoon : darkMoon;
    })
  }

  onThemeSwitch(){
    this.themeService.switchTheme();
  }


}
