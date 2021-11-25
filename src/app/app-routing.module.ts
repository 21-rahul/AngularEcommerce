import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductsComponent} from './products/products.component';
import { AuthGuardService } from './Services/auth-guard.service';
import {UserLoginComponent} from './user-login/user-login.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {SignupComponent} from './signup/signup.component';
import {ItemsComponent} from './items/items.component'
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch : 'full'
  },
  {
    path: 'about',
    component:AboutComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'contact',
    component:ContactComponent,
    canActivate:[AuthGuardService]
  },
  {
    path :'product',
    component:ProductsComponent,
    canActivate:[AuthGuardService]
  },
  // {
  //   path :'products1/:id',
  //   component:ProductsComponent,
  //   canActivate:[AuthGuardService]
  // },
  // {
  //   path :'products2/:ProductName',
  //   component:ProductsComponent,
  //   canActivate:[AuthGuardService]
  // },
  {
    path :'userLogin',
    component:UserLoginComponent,
    canActivate:[AuthGuardService]
  },
  {
    path :'dashboard',
    component:DashboardComponent,
   
  },
  {
    path: 'home',
    component :HomeComponent
  },
  {
    path:'login',
    component:LoginComponent,
  
  },
  {
    path:'items',
    component:ItemsComponent,
  },
  {
    path:'items/:Title',
    component:ItemsComponent,
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'cart',
    component : CartComponent,
    canActivate:[AuthGuardService]

  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
