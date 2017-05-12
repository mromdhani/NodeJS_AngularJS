import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EmployesListComponent } from "app/employes-list/employes-list.component";
import { EmployesAddComponent } from "app/employes-add/employes-add.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { WelcomeComponent } from "app/welcome/welcome.component";


const appRoutes: Routes = [
   
    { path: 'welcome', component: WelcomeComponent },
    { path: 'list', component: EmployesListComponent },
    { path: 'add', component: EmployesAddComponent },
    { path: '', redirectTo:'welcome', pathMatch:'full' },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);