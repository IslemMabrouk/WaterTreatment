import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-mini-card4',
  templateUrl: './mini-card4.component.html',
  styleUrls: ['./mini-card4.component.css']
})
export class MiniCard4Component implements OnInit {
  contacts:any;
  s:any=0;
  constructor(private contactService : ContactService) { }

  ngOnInit(): void {

    this.contactService.contactsAll().subscribe(
      (data)=>{
    this.contacts = data.contacts;
    console.log(this.contacts);
    for (let i = 0; i < this.contacts.length; i++) {
       if (this.contacts[i].etat == "En attente") {
         this.s=this.s + 1;
       }
    }
      })

  }

}
