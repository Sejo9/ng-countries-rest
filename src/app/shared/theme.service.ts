import {Subject} from "rxjs";

export class ThemeService {
  darkThemeActive = false;
  darkThemeSubject = new Subject<boolean>();

  switchTheme(){
    this.darkThemeSubject.next(!this.darkThemeActive);
    this.darkThemeActive = !this.darkThemeActive;
  }
}
