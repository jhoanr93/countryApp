import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor( private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params.
    pipe(switchMap(({ id }) => this.countryService.getCountryByAlpha( id )),
    tap( console.log))
    .subscribe( country => {
      this.country = country;
    });


    /*OPTION 1*/
   /* this.activatedRoute.params.subscribe( params => {
      console.log(params.id);

    this.countryService.getCountryByAlpha ( params.id ).subscribe( country => {
      console.log(country);
      
    })


    })*/
  }

}
