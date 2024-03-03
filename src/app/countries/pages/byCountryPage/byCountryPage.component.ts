
import {  Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryServiceName } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',

  templateUrl: './byCountryPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,

})
export class ByCountryPageComponent implements OnInit{
  public isLoading: boolean =false;
  public countriesByCountry: Country[]=[];

  public initialValue: string ='';

  constructor (private countriesService: CountryServiceName){

  }

  ngOnInit(): void {
       this.countriesByCountry = this.countriesService.cachStore.byCountries.countries
    this.initialValue= this.countriesService.cachStore.byCountries.term;
  }


  searchbyCountry(term: string):void{
    this.isLoading = true;
    this.countriesService.searchByCountry(term).subscribe(countries => {
      this.countriesByCountry = countries;
      this.isLoading = false;
    })
  }
 }
