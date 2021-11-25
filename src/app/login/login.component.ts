import { HttpClient , HttpSentEvent,HttpEvent} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  constructor(private formbuilder : FormBuilder, private _http:HttpClient, private router:Router, private authenticate:AuthenticationService ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    })
  }

  login(){
    this._http.get<any>("http://localhost:3000/signup").subscribe( 
      (res=>{
      const user = res.find((a:any)=>{
        if(!this.loginForm.valid){
          return;
        }
        return a.email===this.loginForm.value.email && 
        a.password === this.loginForm.value.password

      })
      if(user){
        alert("login is successfull");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }
      else{
        alert("user not found");
      }
    }
    )
    ,(err)=>{
      alert("Kuch glt hai server se");
    }
    );
  }

  hide: boolean = true;
  LoginForAuthGuard(){
    this.authenticate.login();
  }

}
