import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email-contact',
  templateUrl: './email-contact.component.html',
  styleUrls: ['./email-contact.component.css']
})
export class EmailContactComponent implements OnInit {

  title = 'nodeMailerApp';
  nodeMailerForm :FormGroup;

  constructor(private fB : FormBuilder,
              private emailService : EmailService) { }

  ngOnInit(): void {

    this.nodeMailerForm = this.fB.group({
      email:[null,[Validators.required]]

    })

  }



  sendEmail(){
    alert("jjj");
    let email  = this.nodeMailerForm.value.email;
    let reqObj = {
      email:email
    }
    this.emailService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    })
  }


}
