import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      name: [''],
      mobile: [''],
      email: [''],
      password: ['']
    })
  }

  //method for create user
  signUp() {
    this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res => {
      alert("Registration successfully");
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("Something went wrong");
    }
    )
  }

}
