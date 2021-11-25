import { Injectable } from '@angular/core';
import {Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private route:Router) { }

  // canActivate(){
  // let breturn = true;
  // if(localStorage.getItem('isLoggedIn')=='false'){
  //   alert("You are not allowed");
  //   this.route.navigate(['/home'])
  //   breturn = false;
  // }
  // else{
  //   this.route.navigate(['/product'])
  //   breturn = true;
  // }
  // return breturn;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let bReturn = true;
    
    if (localStorage.getItem('isLoggedIn') == 'false') {
      alert('Sorry you are not allowed to view this page. Please LOGIN !!');
      this.route.navigate(['/home']);
      bReturn = false;
    }

    return bReturn;
  }


}
