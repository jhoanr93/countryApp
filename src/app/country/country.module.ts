import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';




@NgModule({
  declarations: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    ShowCountryComponent
  ],
  exports:[
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
