import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { ChaceStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountryServiceName {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cachStore:ChaceStore ={
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }

  constructor(private httpClient: HttpClient) {
    this.loadToLocalStorage();
   }

  private getCountriesRequest(url: string):Observable<Country[]>{

    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of([])),
      delay(2000)
    );

  }

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

    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cachStore.byCapital = { term: query, countries: countries}),
      tap(() => this.saveToLocalStoareg())
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}?fullText=true`;

    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cachStore.byCountries = { term: query, countries: countries}),
      tap(() => this.saveToLocalStoareg())
    );;
  }

  searchByRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cachStore.byCapital = { term: region, countries: countries}),
      tap(() => this.saveToLocalStoareg())

    );;
  }

  private saveToLocalStoareg(){
    localStorage.setItem('ChaceStore', JSON.stringify(this.cachStore))
  }

  private loadToLocalStorage(){
    if(!localStorage.getItem('ChaceStore')) return;
    this.cachStore = JSON.parse(localStorage.getItem('ChaceStore')!);
  }
}
