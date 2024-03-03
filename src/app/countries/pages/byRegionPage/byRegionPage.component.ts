
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryServiceName } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',

  templateUrl: './byRegionPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,

})
export class ByRegionPageComponent implements OnInit {
  public countriesByRegion: Country[]=[];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;


  constructor (private countriesService: CountryServiceName){

  }
  ngOnInit(): void {
    this.countriesByRegion = this.countriesService.cachStore.byRegion.countries;
    this.selectedRegion= this.countriesService.cachStore.byRegion.region;
  }


  searchByRegion(region: Region):void{
    this.selectedRegion = region;
    this.countriesService.searchByRegion(region).subscribe(countries => {
      this.countriesByRegion = countries;
    })
  }

}
