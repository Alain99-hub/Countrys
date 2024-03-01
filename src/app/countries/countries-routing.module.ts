import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPagesComponent } from './pages/byCapitalPages/byCapitalPages.component';
import { ByCountryPageComponent } from './pages/byCountryPage/byCountryPage.component';
import { ByRegionPageComponent } from './pages/byRegionPage/byRegionPage.component';
import { CountryPageComponent } from './pages/countryPage/countryPage.component';

const routes: Routes=[
  {
    path: 'by-capital',
    component: ByCapitalPagesComponent
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    path: 'by/:id',
    component: CountryPageComponent
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],


})
export class CountriesRoutingModule { }
