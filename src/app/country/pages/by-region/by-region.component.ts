import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
  styles:[`
        button {
          margin-right: 5px;
        }
  `]
})
export class ByRegionComponent{

  error: boolean = false;
  countries: Country[] = [];
  regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  activeRegion: string = '';

  constructor(private countryService: CountryService) { }

  getClassCss(region: string){
    return (region === this.activeRegion) ? 'btn btn-primary':'btn btn-outline-primary'
  }

  activateRegion (region: string){
    this.activeRegion = region;
    this.countryService.searchCountryByRegion(region).
    subscribe(countries =>
      this.countries = countries);
    
  }

}
