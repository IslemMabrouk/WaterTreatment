import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent implements OnInit {
  contacts:any=[];

  displayedColumns=['client', 'type', 'date','etat','actions'];
  nodeMailerForm:FormGroup;
  etat:any=false;
  constructor(private contactService :ContactService,
              private router :Router,
              private fB : FormBuilder,
              private emailService : EmailService
    ) { }


  ngOnInit(): void {


    this.nodeMailerForm = this.fB.group({
      email:[null,[Validators.required]]

    })

    this.contactService.contactsAll().subscribe(
      (data)=>{
    this.contacts = data.contacts;
    console.log(this.contacts);
    for (let i = 0; i < this.contacts.length; i++) {
       if (this.contacts[i].etat == "En attente") {
         this.etat=!this.etat;
       }
    }
      })


  }


  valideContact(contact:any){
      
    console.log(contact);
    
    // alert("Envoyer");

    this.contactService.updateContact(contact).subscribe((data)=>{
    
      console.log(data);
      })
      
      this.contactService.contactsAll().subscribe(
        (data)=>{
      this.contacts = data.contacts;
      console.log(this.contacts);
        })
      


    let email  = mail;

    
    // let reqObj = {
    //   email:email,
    //   sub : 'RDV-HydroCare',
    //   resp : 'HydroCare vous informe que votre demande a été confirmé, un conseiller HydroCare vous contactera au date de RDV .'
    // }
    // this.emailService.sendMessage(reqObj).subscribe(data=>{
    //   console.log(data);
    // })
//




  }



  deleteContact(id: any,mail:any) {
    console.log(id);
    
    this.contactService.deleteContact(id).subscribe(
      (data) => {
      console.log(data.message);
      this.contactService.contactsAll().subscribe(
        (data)=>{
      this.contacts = data.contacts;
      console.log(this.contacts);
        })
    });


    let email  = mail;
console.log(email);

    
    let reqObj = {
      email:email,
      sub : 'RDV-HydroCare',
      resp : "HydroCare vous informe que votre Rdv n'a pas été encore confirmé, nous vous invitons à le confirmer directement avec le service client au 70235456 ."
    }
    this.emailService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    })

  }

  

}
