import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from "./countries/countries.component";
import {CountryDetailComponent} from "./country-detail/country-detail.component";
import {CountryNotFoundComponent} from "./country-not-found/country-not-found.component";

const routes: Routes = [
  {path: '', component: CountriesComponent, pathMatch: "full"},
  {path: 'country/:name', component: CountryDetailComponent},
  {path: 'country-not-found', component: CountryNotFoundComponent},
  {path: '**', redirectTo: 'country-not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
