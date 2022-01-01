import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from '../confirmPwd';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  signupForm : FormGroup;
  user: any = {};
  loginForm: FormGroup;
  findedUser: any;
  error:any;
  messageAdd:any;
  constructor(private fb :FormBuilder,
              private userService :UserService, private router : Router) { }

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
    console.log("hello");
    this.loginForm = this.fb.group({
      email: [""],
      password: [""],
    }); 
  }
  signup(s:any){
  
    s.role="client";
   
    this.userService.addUser(s).subscribe(
      (data)=>{
        this.messageAdd = data.message;
        console.log(data);
      })
    }

login(){
  this.userService.login(this.user).subscribe(
    (data)=>{
      console.log("findedUser",data.findedUser);
      if (data.findedUser=="incorrect") {
        this.error = data.findedUser;    
      }
      
      if (data.findedUser.role) {
        localStorage.setItem("connectedUser", JSON.stringify(data.findedUser));
        //Redirection
        switch (data.findedUser.role) {
          case 'admin':
            this.router.navigate(['admin/dashboard'])
            break;
          
          case 'client':
              this.router.navigate(['']);
              window.location.reload();
           
             break;
            
             default:
            break;
         
        }
        
      }
    
    }
  )

  
  }



}
