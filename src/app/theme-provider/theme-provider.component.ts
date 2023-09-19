import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from "../shared/theme.service";

@Component({
  selector: 'app-theme-provider',
  templateUrl: './theme-provider.component.html',
  styleUrls: ['./theme-provider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeProviderComponent implements OnInit{

  useDarkTheme: boolean = false;

  constructor(private themeService: ThemeService){}
  ngOnInit() {
    this.themeService.darkThemeSubject.subscribe(usage => {
      this.useDarkTheme = usage;
    })
  }
}
