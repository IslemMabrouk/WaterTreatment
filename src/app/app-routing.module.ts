import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddContratComponent } from './components/add-contrat/add-contrat.component';
import { AddMesureComponent } from './components/add-mesure/add-mesure.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdoucisseursComponent } from './components/adoucisseurs/adoucisseurs.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import { EmailContactComponent } from './components/email-contact/email-contact.component';
import { EntretienComponent } from './components/entretien/entretien.component';
import { EspaceClientComponent } from './components/espace-client/espace-client.component';
import { HomeComponent } from './components/home/home.component';
import { PurificateursComponent } from './components/purificateurs/purificateurs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ValidationDemandeComponent } from './components/validation-demande/validation-demande.component';
import { DashComponent } from './dash/dash.component';
import { Home2Component } from './home2/home2.component';
import { NavComponent } from './nav/nav.component';
import { DisplayContratComponent } from './components/display-contrat/display-contrat.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SuiviComponent } from './components/suivi/suivi.component';


const routes: Routes = [
  // {path: '' , component : HomeComponent}  ,
  {path: 'admin' , 
  component : NavComponent ,
children :[
  {path: 'addProduct' , component: AddProductComponent },
  
  {path: 'dashboard' , component: DashComponent},
  {path: 'addAdmin' , component: AddAdminComponent},
  {path: 'addMesure' , component: AddMesureComponent},  
  { path: '**', redirectTo: '' },
], 


},

  {path: '' , 
  component: Home2Component,
  children :[
    {path: '' , component: HomeComponent},
   
  {path: 'registration' , component: RegistrationComponent},
  {path: 'welcome' , component: WelcomeComponent},
  
  {path: 'adoucisseurs' , component: AdoucisseursComponent},
  {path: 'purificateurs' , component: PurificateursComponent},
  {path: 'aboutUs' , component: AboutUsComponent},
  {path: 'entretien' , component: EntretienComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'espaceClient' , component: EspaceClientComponent},  
  {path: 'emailContact' , component: EmailContactComponent},
  {path: 'suivi' , component: SuiviComponent},

  //Path Dynamique
  {path: 'displayProduct/:id' , component: DisplayProductComponent},
  { path: 'validation/achat/:id' , component: ValidationDemandeComponent},
  { path: 'validation/devis/:id' , component: ValidationDemandeComponent},
   {path: 'displayContrat/:id' , component:DisplayContratComponent },
   {path: 'editUser/:id', component: AddAdminComponent},

  {path: 'addContrat' , component: AddContratComponent},
  {path: 'editContact/:id' , component: ContactComponent},

  { path: '**', redirectTo: '' },

  ],
  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
