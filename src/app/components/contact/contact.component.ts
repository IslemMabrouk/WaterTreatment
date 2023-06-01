import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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
  contactConsForm: UntypedFormGroup;
  contactClientForm: UntypedFormGroup;
  contact:any={};
  connectedUser:any;
  id:any;
  title:any;
  constructor( private fb :UntypedFormBuilder,
              private contactService : ContactService,
              private activatedRoute : ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.contactConsForm= this.fb.group({
      idClient : [''],
      client : [''],
      type: [''],
      date: [''],
      etat: [''],

    });

    this.contactClientForm = this.fb.group({
      idClient : [''],
      type: [''],
      client: [''],
      date: [''],
      etat: [''],
    });

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log(this.connectedUser);

//::::::::::::Edit Contact:::::::::::::::::://
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log( this.id);
    
    if (this.id) {
     this.title = 'Edit RDV'
      this.contactService.getContactId(this.id).subscribe(
        (data) =>{
          this.contact = data.contact
          console.log( this.contact
            );
          
        })
    }
    else
    {
      this.title = 'Valider mon RDV'
    }



  }



  toggleShow1() {

    this.isShown1 = ! this.isShown1;
    
    }

    toggleShow2(){
      this.isShown2 = ! this.isShown2;

    }

 //:::::::::::Conseil Client::::::::://

    contacterCons(){
      if (this.id) {
        //Edit
        
        this.contactService.updateMyContact(this.contact).subscribe(
          (data) => {
            console.log(data.message);
            
          }
        )
        
      } else {
this.contact.idClient = this.connectedUser._id;
this.contact.email = this.connectedUser.email;
this.contact.client = this.connectedUser.firstName+" "+this.connectedUser.lastName;
this.contact.type = "Conseil Client";
this.contact.etat = "En attente";

this.contactService.contacter(this.contact).subscribe(
  (data) =>{
    console.log(data.message);
   
    });

    }
  }


 //:::::::::::Service Client::::::::://

 //:::::::::::Service Client::::::::://

    contacterClient(){
      if (this.id) {
        //Edit
        
        this.contactService.updateMyContact(this.contact).subscribe(
          (data) => {
            console.log(data.message);
            
          }
        )
        
      } else {
      this.contact.idClient = this.connectedUser._id;
      this.contact.email = this.connectedUser.email;
      console.log(this.contact.email );
      

      this.contact.client = this.connectedUser.firstName+" "+this.connectedUser.lastName;

      this.contact.type = "Service Client";
      this.contact.etat = "En attente";
      
      this.contactService.contacter(this.contact).subscribe(
        (data) =>{
          console.log(data.message);
          });
    
          }
        }
        
          openOtherDialog() {
            this.dialog.open(this.secondDialog);
          }








}
