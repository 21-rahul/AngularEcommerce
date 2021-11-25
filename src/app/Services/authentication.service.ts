import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  logval = false;
  varlog = "isLoggedIn";

  login(){
    localStorage.setItem(this.varlog,'true');
    this.logval = true;
  }
  logout(){
    localStorage.setItem(this.varlog,'false');
    this.logval = false;
    alert("logged out");
  }
}
