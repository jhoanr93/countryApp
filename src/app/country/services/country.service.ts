import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population');
  }
  

  constructor( private http: HttpClient) { }

  searchCountry ( term: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  searchByCapital (capitalTerm: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ capitalTerm}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountryByAlpha (id: string): Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>(url);
  }

  searchCountryByRegion (region: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/regionalbloc/${ region }`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }



}
