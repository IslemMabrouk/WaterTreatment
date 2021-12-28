import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeService } from 'src/app/services/demande.service';
import { EmailService } from 'src/app/services/email.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-demande-table',
  templateUrl: './demande-table.component.html',
  styleUrls: ['./demande-table.component.css']
})
export class DemandeTableComponent implements OnInit {
  demandes:any=[];
  users:any;
  displayedColumns=['validation','client', 'product', 'etat','actions'];
  title = 'nodeMailerApp';
  nodeMailerForm :FormGroup;
  constructor(private demandeService : DemandeService,
    private productService : ProductService,private fB : FormBuilder ,
    private emailService : EmailService,private userService :UserService) { }


  ngOnInit(): void {

    this.nodeMailerForm = this.fB.group({
      email:[null,[Validators.required]]

    })

    this.demandeService.getAllDemandes().subscribe(
      (data)=>{
        
        
    this.demandes = data.demandes;
    console.log(this.demandes);
      })

      this.userService.getUsers().subscribe(
        (data)=>{
          
          
      this.users = data.users;
      console.log(this.demandes);
        })
  

  }

  sendEmail(mail:any){
    alert("jjj");
   
    let email  = mail;
    console.log(email);
    
    let reqObj = {
      email:email
    }
    this.emailService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    })
  }



}

