import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
user:any={};
addAdminForm: FormGroup;
users :any;
  constructor(private formbuilder : FormBuilder , private activatedRoute : ActivatedRoute ,
    private userService : UserService) { }

  ngOnInit(){
    this.addAdminForm = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      confirmPassword : [''],
      phone : [''],  
        })
  }
addAdmin(){

this.user.role ="admin";

this.userService.addUser(this.user).subscribe(
  (data)=>{
    console.log(data.message);
    
  }
)
}
}
