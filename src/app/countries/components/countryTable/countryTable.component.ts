
import {  Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-table',
  templateUrl: './countryTable.component.html',
  styles: `
  img{
    width: 25px
  }
  `,

})
export class CountryTableComponent {

  @Input()
  public countriesTable: Country[] =[];
 }
