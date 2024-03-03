
import {  Component, OnInit } from '@angular/core';
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
export class ByCapitalPagesComponent implements OnInit {

  public isLoading: boolean =false;
  public countriesByCapital: Country[]=[];
  public initialValue: string = '';

  constructor (private countriesService: CountryServiceName){

  }
  ngOnInit(): void {
    this.countriesByCapital = this.countriesService.cachStore.byCapital.countries
    this.initialValue= this.countriesService.cachStore.byCapital.term;
  }


  searchByCapital(term: string):void{
    this.isLoading = true;
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countriesByCapital = countries;
      this.isLoading = false;
    })
  }


 }
