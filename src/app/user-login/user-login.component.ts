import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  
  constructor( private ActivateRoute : ActivatedRoute) { }
  paramObj:any
  ngOnInit(): void {
   
    this.ActivateRoute.queryParams.subscribe((data)=>{
      this.paramObj = data;
      let str = `user ID is ${this.paramObj.uid} and Password is ${this.paramObj.pwd}`
      alert(str)
    })

}

}
