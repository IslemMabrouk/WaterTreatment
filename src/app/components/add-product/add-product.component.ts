import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

product : any={};
addAdoucisseurForm: FormGroup;
addPurificateurForm: FormGroup;
id : any;
users : any;
title : string;
messageAdd : any;
imagePreview : any;
  constructor( private fb : FormBuilder,
               private productService : ProductService,
               private router :Router,
           ) { }

  ngOnInit(): void {
    this.addAdoucisseurForm = this.fb.group({
      type: [''],
      price: [''],
      volume: [''],
      pression:[''],
      economie: [''],
      conception :[''],
      img : [''],
    })

    this.addPurificateurForm = this.fb.group({
      type: [''],
      price: [''],
      chlore: [''],
      img : [''],
    })


    }

    
    addAdoucisseur(){

      this.product.role = 'Adoucisseur';
    
      this.productService.addAdoucisseur(this.product, this.addAdoucisseurForm.value.img).subscribe(
        (data) => {
          console.log(data.message);
          this.messageAdd = data.message;
        }
      )
    }

    addPurificateur(){

      this.product.role = 'Purificateur';

      this.productService.addPurificateur(this.product, this.addPurificateurForm.value.img).subscribe(
        (data) => {
          console.log(data.message);
          this.messageAdd = data.message;
        }
      )

    }

    onImageSelected(event: Event) {
      //Selection du fichier
      const file = (event.target as HTMLInputElement).files[0];
      // Ajout d'un attribut img dans l'objet Chef
      this.addAdoucisseurForm.patchValue({ img: file });
      this.addPurificateurForm.patchValue({ img: file });
      // Mise à jour des valeurs du form
      this.addAdoucisseurForm.updateValueAndValidity();
      this.addPurificateurForm.updateValueAndValidity();
      // Creation d'une variable reader pour lire le contenu de fichiers
      const reader = new FileReader();
      //Déclenchement du event load lors d'une lecture de fichier avec succès
      reader.onload = () => {
      //affecter le résultat de la lecture dans la variable imagePreview
      this.imagePreview = reader.result as string
      };
      // lecture du contenu du fichier Blob ou File
      reader.readAsDataURL(file);
      }





}
