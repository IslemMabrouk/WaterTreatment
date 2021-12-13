import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  signupForm : FormGroup;
  constructor(private fb :FormBuilder,) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName : ['',[Validators.minLength(3),Validators.required]],
      lastName : ['',[Validators.minLength(5),Validators.required]],
      email : ['',[Validators.email,Validators.required]],
      password : ['',[Validators.minLength(8),Validators.required]],
      confirmPassword : ['',[Validators.required]],
      tel : ['',[Validators.minLength(8),Validators.maxLength(13),Validators.required]]
    },
    
    {
      validator: MustMatch('password','confirmPassword')
      }
    
    )
  }

}
