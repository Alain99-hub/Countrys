
import {  Component } from '@angular/core';
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
export class ByCountryPageComponent {
  public countriesByCountry: Country[]=[];

  constructor (private countriesService: CountryServiceName){

  }


  searchbyCountry(term: string):void{
    this.countriesService.searchByCountry(term).subscribe(countries => {
      this.countriesByCountry = countries;
    })
  }
 }
