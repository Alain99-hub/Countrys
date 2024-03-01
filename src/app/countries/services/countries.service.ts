import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryServiceName {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }


  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.httpClient.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }

  searchCapital(query: string):Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${query}`;

    return this.httpClient.get<Country[]>(url).pipe(

      // tap(countries => console.log('tap: ', countries)),

      // map(countries => []),
      // tap(countries => console.log('tap2: ', countries)),

      catchError(error => {
        console.log(error)
        return of([])
      } )

    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}?fullText=true`;

    return this.httpClient.get<Country[]>(url).pipe(

      // tap(countries => console.log('tap: ', countries)),

      // map(countries => []),
      // tap(countries => console.log('tap2: ', countries)),

      catchError(error => {
        console.log(error)
        return of([])
      } )

    );
  }

  searchByRegion(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${query}`;

    return this.httpClient.get<Country[]>(url).pipe(

      // tap(countries => console.log('tap: ', countries)),

      // map(countries => []),
      // tap(countries => console.log('tap2: ', countries)),

      catchError(error => {
        console.log(error)
        return of([])
      } )

    );
  }

}
