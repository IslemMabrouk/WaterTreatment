import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent implements OnInit {
  contacts:any=[];
  displayedColumns=['client', 'type', 'date','actions'];

  constructor(private contactService :ContactService,private router :Router
    ) { }


  ngOnInit(): void {


    this.contactService.contactsAll().subscribe(
      (data)=>{
        
        
    this.contacts = data.contacts;
    console.log(this.contacts);
      })


  }




}
