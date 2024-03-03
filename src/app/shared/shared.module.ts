import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/homePages/homePages.component';
import { AboutPagesComponent } from './pages/aboutPages/aboutPages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { LoadingSpinnerComponent } from './components/Loading-spinner/Loading-spinner.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPagesComponent,
    ContactPageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

    exports:[ HomePagesComponent,
              AboutPagesComponent,
              ContactPageComponent,
              SidebarComponent,
              SearchBoxComponent,
              LoadingSpinnerComponent
    ]

})
export class SharedModule { }
