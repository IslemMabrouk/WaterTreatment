import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('secondDialog') secondDialog: TemplateRef<any>;
  isShown1: boolean = false ;
  isShown2: boolean = false ;
  contactConsForm: FormGroup;
  contactClientForm: FormGroup;
  contact:any={};
  connectedUser:any;
  constructor( private fb :FormBuilder,
              private contacService : ContactService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.contactConsForm= this.fb.group({
      idClient : [''],
      client : [''],
      type: [''],
      date: ['']
    });

    this.contactClientForm = this.fb.group({
      idClient : [''],
      type: [''],
      client: [''],
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
this.contact.client = this.connectedUser.firstName+" "+this.connectedUser.lastName;
this.contact.type = "Conseil Client";

this.contacService.contacter(this.contact).subscribe(
  (data) =>{
    console.log(data.message);
   
    });

    }


    contacterClient(){
      this.contact.idClient = this.connectedUser._id;
      this.contact.client = this.connectedUser.firstName+" "+this.connectedUser.lastName;

      this.contact.type = "Service Client";
      
      this.contacService.contacter(this.contact).subscribe(
        (data) =>{
          console.log(data.message);
          });
    
          }

        
          openOtherDialog() {
            this.dialog.open(this.secondDialog);
          }








}
