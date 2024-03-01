
import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryServiceName } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',

  templateUrl: './countryPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(private activateRoute: ActivatedRoute,
              private countryServices: CountryServiceName,
              private router: Router
              ){}


  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.countryServices.searchCountryByAlphaCode(id)),
    )
    .subscribe((country)=>{
        if(!country){
              return this.router.navigateByUrl('');
        }

        return  this.country = country;
      });

    }


  }






