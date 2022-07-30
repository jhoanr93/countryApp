import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { InputComponent } from './components/input/input.component';
import { VideosComponent } from './pages/videos/videos.component';




@NgModule({
  declarations: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    ShowCountryComponent,
    CountryTableComponent,
    InputComponent,
    VideosComponent
  ],
  exports:[
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
