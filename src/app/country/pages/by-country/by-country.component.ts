import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent  {

  term: string ="Colombia";
  error: boolean = false;
  countries: Country[] = [];
  suggestCountries: Country[] = [];
  showSuggest: boolean = false;

  

  constructor( private countryService: CountryService) { }

  search( term: string){
    this.error = false;
    this.term = term;


    this.countryService.searchCountry (this.term).subscribe( (countries) =>{
      this.countries = countries;
    }, (err) => {
      this.error = true;
      this.countries = [];
    }
    );

  }

  suggest( term: string){
    this.error = false;
    this.term = term;
    this.showSuggest = true;

    this.countryService.searchCountry (term).subscribe( 
      countries => this.suggestCountries = countries.splice(0,5),
      (err)=> this.suggestCountries);
    
  }

  searchSuggest (term: string){
    this.search(term);
  }

  

}
