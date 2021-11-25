import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup

  constructor(private formbuilder : FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe((res)=>{
      alert("Registration Successfull");
      this.signupForm.reset();
      this.router.navigate(['login'])
    },
    err=>{
      alert("wrong");
    }
    )
  }
  hide: boolean = true;
}
