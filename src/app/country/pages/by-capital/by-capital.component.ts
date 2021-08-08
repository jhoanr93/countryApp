import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

  term: string="bogota";
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search (term: string){
    this.error = false;
    this.term = term;
    
    this.countryService.searchByCapital(this.term).subscribe( (countries) =>{
      this.countries = countries;
    }, (err) => {
      this.error = true;
      this.countries = [];
    }
    );

  }


  ngOnInit(): void {
  }

}
