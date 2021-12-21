import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isShown1: boolean = false ;
  isShown2: boolean = false ;
  contactConsForm: FormGroup;
  contactClientForm: FormGroup;
  contact:any={};
  connectedUser:any;
  constructor( private fb :FormBuilder,
              private contacService : ContactService) { }

  ngOnInit(): void {
    this.contactConsForm= this.fb.group({
      idClient : [''],
      type: [''],
      date: ['']
    });

    this.contactClientForm = this.fb.group({
      idClient : [''],
      type: [''],
      date: ['']
    });

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log(this.connectedUser);
  }



  toggleShow1() {

    this.isShown1 = ! this.isShown1;
    
    }

    toggleShow2(){
      this.isShown2 = ! this.isShown2;

    }
    contacterCons(){
this.contact.idClient = this.connectedUser._id;
this.contact.type = "Conseil Client";

this.contacService.contacter(this.contact).subscribe(
  (data) =>{
    console.log(data.message);
    });

    }


    contacterClient(){
      this.contact.idClient = this.connectedUser._id;
      this.contact.type = "Service Client";
      
      this.contacService.contacter(this.contact).subscribe(
        (data) =>{
          console.log(data.message);
          });
      
          }



}
