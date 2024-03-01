
import {  Component } from '@angular/core';
import { CountryServiceName } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-pages',
  templateUrl: './byCapitalPages.component.html',
  styles: `
    :host {
      display: block;
    }
  `,

})
export class ByCapitalPagesComponent {

  public countriesByCapital: Country[]=[];

  constructor (private countriesService: CountryServiceName){

  }


  searchByCapital(term: string):void{
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countriesByCapital = countries;
    })
  }


 }
