import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/homePages/homePages.component';
import { AboutPagesComponent } from './shared/pages/aboutPages/aboutPages.component';
import { ContactPageComponent } from './shared/pages/contactPage/contactPage.component';
import { CountriesModule } from './countries/countries.module';

const routes: Routes = [
//   {
//   path:'',
//   component: HomePagesComponent
// },
{
  path: 'about',
  component: AboutPagesComponent
},
{
  path: 'contact',
  component: ContactPageComponent
},
{
  path: 'countries',
  loadChildren: ()=> import('./countries/countries.module').then(m => m.CountriesModule)
},
{
  path: '**',
  redirectTo: 'countries'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
