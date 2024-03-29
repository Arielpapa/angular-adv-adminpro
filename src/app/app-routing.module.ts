import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const routes: Routes = [
 
 
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
 
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes),//mando las rutas principales al forRoot
    PagesRoutingModule
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
