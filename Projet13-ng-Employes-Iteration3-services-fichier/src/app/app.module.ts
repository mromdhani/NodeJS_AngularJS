import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EmployesAddComponent } from './employes-add/employes-add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from "app/app.routing";
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesListComponent,
    NavbarComponent,
    FooterComponent,
    EmployesAddComponent,
    NotFoundComponent,
    WelcomeComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
