
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryServiceName } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',

  templateUrl: './byRegionPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,

})
export class ByRegionPageComponent {
  public countriesByRegion: Country[]=[];

  constructor (private countriesService: CountryServiceName){

  }


  searchByRegion(term: string):void{
    this.countriesService.searchByRegion(term).subscribe(countries => {
      this.countriesByRegion = countries;
    })
  }

}
