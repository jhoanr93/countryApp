import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Video } from 'src/app/models/videos';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {
  public videos:Array<Video>;

  country!: Country;

  constructor( private activatedRoute: ActivatedRoute, private countryService: CountryService) {
    this.videos = 
    [
      new Video ('Colombia', 'https://www.youtube.com/watch?v=diC8UB9jzqM'),
      new Video ('Ecuador', 'https://www.youtube.com/watch?v=diC8UB9jzqM'),
      new Video ('España', 'https://www.youtube.com/watch?v=IftfIk-pRwI')
    ];
    console.log(this.videos);
   }

  ngOnInit(): void {

    this.activatedRoute.params.
    pipe(switchMap(({ id }) => this.countryService.getCountryByAlpha( id )),
    tap( console.log))
    .subscribe( country => {
      this.country = country;
    });

  
 
    
  }

  test(): void{
    console.log(this.videos[1])
  }

  hayVideo():Boolean{
  
    if(this.videos.find(element => element.nombre == this.country.name)){
     return true; 
    }else{
     return false;
    }

    /*OPTION 1*/
   /* this.activatedRoute.params.subscribe( params => {
      console.log(params.id);

    this.countryService.getCountryByAlpha ( params.id ).subscribe( country => {
      console.log(country);
      
    })


    })*/
  }

}
