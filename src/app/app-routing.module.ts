import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddContratComponent } from './components/add-contrat/add-contrat.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdoucisseursComponent } from './components/adoucisseurs/adoucisseurs.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { EntretienComponent } from './components/entretien/entretien.component';
import { EspaceClientComponent } from './components/espace-client/espace-client.component';
import { HomeComponent } from './components/home/home.component';
import { PurificateursComponent } from './components/purificateurs/purificateurs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashComponent } from './dash/dash.component';
import { Home2Component } from './home2/home2.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  // {path: '' , component : HomeComponent}  ,
  {path: 'admin' , 
  component : NavComponent ,
children :[

  
  {path: 'dash' , component: DashComponent},
  { path: '**', redirectTo: '' },
], 


},
  {path: '' , 
  component: Home2Component,
  children :[
    {path: '' , component: HomeComponent},
   
  {path: 'registration' , component: RegistrationComponent},
  {path: 'addAdmin' , component: AddAdminComponent},
  {path: 'addProduct' , component: AddProductComponent },
  {path: 'dashboardAdmin' , component: DashboardAdminComponent},
  {path: 'adoucisseurs' , component: AdoucisseursComponent},
  {path: 'purificateurs' , component: PurificateursComponent},
  {path: 'aboutUs' , component: AboutUsComponent},
  {path: 'entretien' , component: EntretienComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'espaceClient' , component: EspaceClientComponent},
  {path: 'addContrat' , component: AddContratComponent},
  { path: '**', redirectTo: '' },
  ],
  },
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
